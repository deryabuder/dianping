import * as actionTypes from '../constants/store'

const initialState = []

export default function userinfo(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_UPDATE:
      return action.data
    case actionTypes.STORE_ADD:
      state.unshift(action.data)
      return state
    case actionTypes.STORE_RM:
      // eslint-disable-next-line array-callback-return
      return state.filter(function(item) {
        if (item.id !== action.data.id) {
          return item
        }
      })
    default:
      return state
  }
}