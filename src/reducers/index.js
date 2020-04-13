import configStore from './configStore'
import { EMPTY_OBJECT } from '../const'
import stock from './stock'

const initialState = EMPTY_OBJECT

export const reducers = {
  stock
}

const store = configStore(initialState, reducers)

export default store
