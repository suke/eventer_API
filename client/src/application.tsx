import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/app'
import 'ress'
import GlobalStyle from './global_style'

const store = configureStore()

const target = document.getElementById('app')
render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.Fragment>,
  target
)
