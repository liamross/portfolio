import 'jest'
import reducer, { initialState } from '../reducer'
// import * as actions from '../actions'

describe('TopBar reducer', () => {
  it('should default to initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(
      initialState,
    )
  })
})
