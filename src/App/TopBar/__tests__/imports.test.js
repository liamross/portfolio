import 'jest'
import AppMenu from '../../AppMenu'

describe('Topbar imports', () => {
  describe('from AppMenu', () => {
    it('action creators should return correct objects', () => {
      expect(
        AppMenu.actions.setAppMenu(true),
      ).toEqual(
        {
          type: AppMenu.actiontypes.SET_APP_MENU,
          payload: true,
        },
      )
    })
  })
})
