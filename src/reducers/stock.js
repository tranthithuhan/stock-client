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
      const newStocks = [...state.stocks, ...action.result.data]
      return Immutable.merge({
        stocks: newStocks,
        loading: false,
        error: null
      })

    default:
      return state
  }
}
