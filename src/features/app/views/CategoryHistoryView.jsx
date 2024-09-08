import { useMemo } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Grid, Stack } from "@mui/material";

import { SHOW_ALL } from "../../../constants";
import {
  filterTransactionsByConcept,
  filterTransactionsByYear,
  getAllTransactions,
  getUniqueTransactionConcepts,
  getUniqueTransactionYears,
  groupTransactionsByMonthYear,
  normalizeTransactionsAmount,
  sortTransactionsByDate,
  toMoney,
} from "../../../utils";
import { HistoricChart, Select, Spacing, ViewBox } from "../../../ui";

const INITIAL_SELECT_VALUE = {
  category: SHOW_ALL,
  year: SHOW_ALL,
};

export const CategoryHistoryView = ({ accounts }) => {
  const { watch, control } = useForm({
    defaultValues: INITIAL_SELECT_VALUE,
  });
  const [selectedCategory, selectedYear] = watch(["category", "year"]);
  const selectionOptions = useMemo(() => {
    const allTransactions = getAllTransactions(accounts);
    return {
      categories: [...getUniqueTransactionConcepts(allTransactions), SHOW_ALL]
        .sort()
        .map((concept) => ({
          name: concept.toLowerCase(),
          label: concept,
          value: concept,
        })),
      years: [...getUniqueTransactionYears(allTransactions), SHOW_ALL]
        .sort()
        .reverse()
        .map((year) => ({
          name: year.toString(),
          label: year.toString(),
          value: year.toString(),
        })),
    };
  }, [accounts]);
  const transactionsDataset = useMemo(() => {
    const allTransactions = sortTransactionsByDate(
      getAllTransactions(accounts)
    );

    let filteredTransactions = allTransactions;

    if (selectedCategory !== SHOW_ALL) {
      filteredTransactions = filterTransactionsByConcept(
        filteredTransactions,
        selectedCategory
      );
    }

    if (selectedYear !== SHOW_ALL) {
      filteredTransactions = filterTransactionsByYear(
        filteredTransactions,
        Number(selectedYear)
      );
    }

    return groupTransactionsByMonthYear(
      normalizeTransactionsAmount(filteredTransactions)
    );
  }, [accounts, selectedCategory, selectedYear]);

  const getViewBoxTitle = () => {
    if (selectedCategory === SHOW_ALL && selectedYear === SHOW_ALL) {
      return "Total amount history";
    }

    if (selectedCategory !== SHOW_ALL && selectedYear === SHOW_ALL) {
      return `Total amount history for ${selectedCategory}`;
    }

    if (selectedCategory === SHOW_ALL && selectedYear !== SHOW_ALL) {
      return `Total amount history for ${selectedYear}`;
    }

    return `Total amount history for ${selectedCategory} in ${selectedYear}`;
  };

  return (
    <ViewBox title={getViewBoxTitle()}>
      <Stack spacing={Spacing.MD}>
        <Grid container spacing={Spacing.XS}>
          <Grid item xs={12} md={6}>
            <Select
              name="category"
              label="Category"
              options={selectionOptions?.categories}
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              name="year"
              label="Year"
              options={selectionOptions?.years}
              control={control}
              fullWidth
            />
          </Grid>
        </Grid>

        <HistoricChart
          dataset={transactionsDataset}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "monthYear",
            },
          ]}
          series={[
            {
              dataKey: "amount",
              label: "Amount",
              valueFormatter: (value) => toMoney(value),
            },
          ]}
        />
      </Stack>
    </ViewBox>
  );
};

CategoryHistoryView.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      accountId: PropTypes.number.isRequired,
      bank: PropTypes.string.isRequired,
      accountAlias: PropTypes.string.isRequired,
      iban: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      transactions: PropTypes.array.isRequired,
      isSharedAccount: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
