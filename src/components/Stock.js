import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../reducers/stock'
import StockChart from './StockChart'
import StockTable from './StockTable'


function Stock () {
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(fetchData())
    }, 1000)
    return () => {
      clearInterval(timer);
    }
  }, [])


  return (
    <>
      <StockChart/>
      <StockTable/>
    </>
  )
}

export default Stock
