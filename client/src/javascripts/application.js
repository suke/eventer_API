import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import routes from './routes'
import Sidebar from './components/sidebar'
import 'ress'
import baseStyle from './global_style'

const store = configureStore()

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    baseStyle()
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <MainContainer>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </MainContainer>
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

const MainContainer = styled.div`
  background: #f4f7f8;
  padding: 20px;
`

const target = document.getElementById('app')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
)
