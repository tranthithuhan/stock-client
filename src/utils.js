import { EMPTY_ARRAY, STOCK_CHART_SERIES_OPTION } from './const'

export const getStockChartSeries = (stocks) => {
  let chartSeries = EMPTY_ARRAY

  chartSeries = stocks.reduce((result, stock) => {
    Object.keys(stock.stocks).forEach((stockName, index) => {
      if(result.find(item => item.id === stockName)) {
        result = result.map(resultItem => {
          return resultItem.id === stockName ? {...resultItem, data: [...resultItem.data, [stock.timestamp, stock.stocks[stockName]]]} : resultItem
        })
      } else {
        result.push({
          ...STOCK_CHART_SERIES_OPTION[stockName],
          data: [[stock.timestamp, stock.stocks[stockName]]]
        })
      }
    })

    return result
  }, [])

  return chartSeries
}


export const getStockTableDataSource = (stocks = EMPTY_ARRAY) => {
  let dataSource = []

  dataSource = stocks.reduce((result, stock) => {
    Object.keys(stock.stocks).forEach((stockName, index) => {
      if(result[index]) {
        result[index] = {...result[index], [stock.timestamp]: stock.stocks[stockName]}
      } else {
        result[index] = {name: stockName, [stock.timestamp]: stock.stocks[stockName]}
      }
    })

    return result
  }, [])

  return dataSource || EMPTY_ARRAY
}


export const roundDown = (number, decimals) => {
  decimals = decimals || 0;
  return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
}
