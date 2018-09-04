import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import routes from '../config/routes'
import Sidebar from './sidebar'

const App = () => (
  <Router>
    <Wrapper>
      <StyledSidebar />
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
      <ToastContainer autoClose={2000} />
    </Wrapper>
  </Router>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas: 'sidebar content';
`
const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
`

const MainContainer = styled.div`
  grid-area: content;
  background: #f4f7f8;
  padding: 20px;
`

export default App
