// import * as t from './actionTypes'
import AppMenu from '../AppMenu'

export const initialState = {
  panels: {
    appMenuOpen: false,
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AppMenu.actiontypes.TOGGLE_APP_MENU:
      return {
        ...state,
        panels: AppMenu.reducer(state.panels, action),
      }
    case AppMenu.actiontypes.SET_APP_MENU:
      return {
        ...state,
        panels: AppMenu.reducer(state.panels, action),
      }
    default:
      return state
  }
}
