import { EMPTY_ARRAY, STOCK_CHART_SERIES_OPTION } from './const'

export const getStockChartSeries = (stock) => {
  let chartSeries = EMPTY_ARRAY

  console.log(stock)
  Object.keys(stock).forEach(stockName => {
    chartSeries.push({
      ...STOCK_CHART_SERIES_OPTION[stockName],
      data: stock[stockName]
    })
  })

  console.log(chartSeries)
  return chartSeries
}
