import 'jest'
import reducer from '../reducer'
import * as actions from '../actions'
import { initialState } from '../../TopBar/reducer'

describe('AppMenu reducer', () => {
  describe('appMenuOpen:', () => {
    it('should be false when given default state', () => {
      expect(
        reducer(initialState.panels.appMenuOpen, {}).open,
      ).toBeFalsy()
    })

    it('should handle SET_APP_MENU', () => {
      // Set open, assign current state.
      const currentState =
      reducer(initialState.panels.appMenuOpen, actions.setAppMenu(true))
      expect(
        currentState.appMenuOpen,
      ).toBeTruthy()

      // Set open, current state already open.
      expect(
        reducer(currentState, actions.setAppMenu(true)).appMenuOpen,
      ).toBeTruthy()

      // Set closed, current state is open.
      expect(
        reducer(currentState, actions.setAppMenu(false)).appMenuOpen,
      ).toBeFalsy()
    })
  })
})
