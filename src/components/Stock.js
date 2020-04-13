import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../reducers/stock'
import StockChart from './StockChart'


function Stock () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <>
      <StockChart/>
    </>
  )
}

export default Stock
