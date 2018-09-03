import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import routes from '../config/routes'
import Sidebar from './sidebar'

const App = () => (
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas: 'sidebar content';
`

const MainContainer = styled.div`
  background: #f4f7f8;
  padding: 20px;
`

export default App
