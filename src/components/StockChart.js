import React from 'react'
import { useSelector } from 'react-redux'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { getStockChartSeries } from '../utils'


function StockChart () {
  const stocksData = useSelector(state => state.stock.stocks)
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    width: '100%',
    xAxis: {
      type: 'datetime',
    },
    tooltip: {
      formatter () {
        return this.points.reduce((s, point) => {
            return `${ s }<br><b style="color: ${ point.series.color }">${ point.series.name }: </b>${ point.y }`
          },
          `<b>${ new Date(this.x).toLocaleString() }</b>`)
      },
      shared: true,
      headerFormat: '<small>{point.key}</small><table>'
    },
    series: getStockChartSeries(stocksData)
  }
  return (
    <HighchartsReact
      highcharts={ Highcharts }
      options={ options }
    />
  )
}

export default StockChart
