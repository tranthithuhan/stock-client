import React from 'react'
import { Provider } from 'react-redux'

import testStore from '../reducers/index'

export function renderWithRedux (children, { store = testStore } = {}) {
  return <Provider store={store}>{ children }</Provider>
}
