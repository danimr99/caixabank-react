import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import { toMoney } from "../../utils";

export const MoneyText = ({ amount = 0 }) => {
  return (
    <Typography
      variant="h4"
      color={(theme) =>
        amount < 0 ? theme?.palette?.error?.main : theme?.palette?.text?.primary
      }
      fontWeight={600}
    >
      {toMoney(amount)}
    </Typography>
  );
};

MoneyText.propTypes = {
  amount: PropTypes.number,
};
