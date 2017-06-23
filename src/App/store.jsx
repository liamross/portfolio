import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// import sagas from './rootSaga'
import reducers from './rootReducer'

// Create a middlewares array in order to push all middlewares independently.
const middlewares = []

// add the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// middlewares.push(sagaMiddleware)

// add the reducer middleware
export const history = createHistory()
middlewares.push(routerMiddleware(history))

// Apply middlewares to middleware constant.
const middleware = applyMiddleware(...middlewares)

// Create store with devtools and middleware.
const store = createStore(reducers, composeWithDevTools(middleware))
// sagaMiddleware.run(sagas)

export default store
