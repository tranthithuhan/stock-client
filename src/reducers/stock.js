import Immutable from 'seamless-immutable'

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATASUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'
export const UPDATE_STOCK_DATA = 'UPDATE_STOCK_DATA'

const initialState = {
  loading: false,
  error: null,
  stocks: []
}

export const fetchData = (count = 20) => {
  return {
    types: [FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_SUCCESS],
    promise: client => client.get('/', {params: {count}})
  }
}

export const updateStockData = (timestamp, value, stockName) => {
  return dispatch => {
    dispatch({
      type: UPDATE_STOCK_DATA,
      timestamp, value, stockName
    })
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
      const newStocks = [...state.stocks, ...action.result.data]
      return Immutable.merge({
        stocks: newStocks,
        loading: false,
        error: null
      })

    case UPDATE_STOCK_DATA:

      return Immutable.merge({
        stocks: state.stocks.map(d => {
          if (`${d.timestamp}` === action.timestamp) {
            return {
              ...d,
              stocks: {
                ...d.stocks,
                [action.stockName]: parseFloat(action.value)
              }
            }
          }

          return d;
        })
      })

    default:
      return state
  }
}
