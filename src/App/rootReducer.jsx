import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import TopBar from './TopBar'
// import Pantry from './Pantry'

const topbar = TopBar.reducer
// const pantry = Pantry.reducer

export default combineReducers({
  topbar,
  // pantry,
  router,
})
