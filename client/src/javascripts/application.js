import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import routes from './routes'
import Sidebar from './components/sidebar'
import 'ress'

const store = configureStore()

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <div>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </Wrapper>
      </Router>
    )
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas: 'sidebar content';
`

const target = document.getElementById('app')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
)
