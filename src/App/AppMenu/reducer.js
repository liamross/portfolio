import * as t from './actiontypes'

export default function reducer(state, action) {
  switch (action.type) {
    case t.SET_APP_MENU:
      return {
        ...state,
        appMenuOpen: action.payload,
      }
    default:
      return state
  }
}
