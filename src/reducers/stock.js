import Immutable from 'seamless-immutable'

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATASUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

const initialState = {
  loading: false,
  error: null,
  stocks: []
}

export const fetchData = (count = 20) => {
  console.log(count)
  return {
    types: [FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_SUCCESS],
    promise: client => client.get('/', {params: {count}})
  }
}

export default function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case FETCH_DATA:
      return Immutable.set(state, 'loading', true)

    case FETCH_DATA_FAIL:
      return Immutable.merge(state, {
        loading: false, error: action.error
      })

    case FETCH_DATA_SUCCESS:
      const stocks = action.result.data.reduce((result, stockData) => {
        Object.keys(stockData.stocks).forEach(stockName => {
          const newStockData = [stockData.timestamp, stockData.stocks[stockName]]
          if (result[stockName]) {
            result[stockName].push(newStockData)
          } else {
            result[stockName] = [newStockData]
          }
        })

        return result
      }, {})

      return Immutable.merge({
        stocks: stocks,
        loading: false,
        error: null
      })

    default:
      return state
  }
}
