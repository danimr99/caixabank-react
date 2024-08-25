/** @import {FuturePieChartData, PieChartData} from '../docs' */

/**
 * Creates a pie chart data object to be used in a pie chart.
 *
 * @function
 * @param {FuturePieChartData} data - The data to be used in the pie chart.
 * @returns {PieChartData} The pie chart data.
 */
export const createPieChartData = (data) => {
  return data.map((item, index) => {
    return {
      id: index + 1,
      ...item,
    };
  });
};
