import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import routes from '../routes'

const Sidebar = ({ className }) => (
  <SidebarWrapper className={className}>
    <ul>
      {routes.map((route, index) => (
        <li key={index}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} />
    ))}
  </SidebarWrapper>
)

const SidebarWrapper = styled.div`
  height: 100vh;
`

export default Sidebar
