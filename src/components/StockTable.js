import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { getStockTableDataSource, roundDown } from '../utils'
import TableCellInput from './TableCellInput'

function StockTable () {
  const stocksData = useSelector(state => state.stock.stocks)

  const dataSource = getStockTableDataSource(
    stocksData
  )


  let columns = Object.keys(dataSource[0] || []).map(timestamp => {
    return {
      title: '',
      width: 100,
      dataIndex: timestamp,
      render: (text, record, index) => {
        return parseInt(timestamp) ?
          <TableCellInput
            value={ roundDown(text, 2) }
            timestamp={timestamp}
            stockName={dataSource[index].name}
          /> :
          text
      }
    }
  })


  return (
    <Table
      dataSource={ dataSource }
      rowKey={ row => row.name }
      columns={ columns }
      scroll={{ x: 'max-content', y: 'max-content' }}
    />
  )
}

export default StockTable
