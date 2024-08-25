import PropTypes from "prop-types";
import { PieChart as MuiPieChart } from "@mui/x-charts";

export const PieChart = ({ data }) => {
  return (
    <MuiPieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    />
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};
