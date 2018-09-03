import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../modules/rootReducer'
import logger from 'redux-logger'
import rootSaga from '../sagas'
export const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/rootReducer', () => {
      const nextRootReducer = require('../modules/rootReducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  sagaMiddleware.run(rootSaga)

  return store
}
