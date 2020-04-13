import Immutable from 'seamless-immutable'

const initialState = {
  loading: false,
  error: null
}

export default function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    default:
      return state
  }
}
