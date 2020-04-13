import React, {useState} from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { updateStockData } from '../reducers/stock'

function TableCellInput (props) {
  const dispatch = useDispatch()
  const [value, setValue] = useState(props.value)

  const handleUpdateData = () => {
    dispatch(updateStockData(
      props.timestamp,
      value,
      props.stockName
    ))
  }

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleUpdateData}
    />
  )
}

export default TableCellInput
