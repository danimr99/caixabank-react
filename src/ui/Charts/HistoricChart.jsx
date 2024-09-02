import PropTypes from "prop-types";
import { BarChart, axisClasses } from "@mui/x-charts";

export const HistoricChart = ({ xAxis, yAxis, series, dataset }) => {
  return (
    <BarChart
      height={300}
      xAxis={xAxis}
      yAxis={yAxis}
      series={series}
      dataset={dataset}
      slotProps={{ legend: { hidden: true } }}
      grid={{ horizontal: true, vertical: true }}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translateX(-10px)",
        },
      }}
    />
  );
};

HistoricChart.propTypes = {
  xAxis: PropTypes.array,
  yAxis: PropTypes.array,
  series: PropTypes.array,
  dataset: PropTypes.array,
};
