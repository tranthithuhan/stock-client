import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import moment from 'moment'
import { getStockTableDataSource, roundDown } from '../utils'
import TableCellInput from './TableCellInput'

function StockTable () {
  const stocksData = useSelector(state => state.stock.stocks)

  const dataSource = getStockTableDataSource(stocksData)

  let columns = Object.keys(dataSource[0] || []).map(keyName => {
    return {
      title: parseInt(keyName) ? moment(parseInt(keyName)).format('h:mm:ss') : keyName,
      dataIndex: keyName,
      render: (text, record, index) => {
        return parseInt(keyName) ? <TableCellInput value={ roundDown(text, 3) }/> : text
      }
    }
  })


  return (
    <Table
      dataSource={ dataSource }
      rowKey={ row => row.name }
      columns={ columns }
    />
  )
}

export default StockTable
