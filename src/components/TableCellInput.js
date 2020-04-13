import React, {useState} from 'react'
import { Input } from 'antd'

function TableCellInput (props) {
  const [value, setValue] = useState(props.value)
  return (
    <Input
      value={value}
    />
  )
}

export default TableCellInput
