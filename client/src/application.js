import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/app'
import 'ress'
import baseStyle from './global_style'

const store = configureStore()

const target = document.getElementById('app')
baseStyle()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
)
