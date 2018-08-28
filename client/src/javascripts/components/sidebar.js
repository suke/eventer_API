import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import routes from '../routes'

const Sidebar = ({ className }) => (
  <SidebarWrapper className={className}>
    <ul>
      {routes.map((route, index) => (
        <ListItem key={index}>
          <StyledLink to={route.path}>{route.name}</StyledLink>
        </ListItem>
      ))}
    </ul>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} />
    ))}
  </SidebarWrapper>
)

const SidebarWrapper = styled.div`
  height: 100vh;
  padding: 20px 0;
`

const ListItem = styled.li`
  border-bottom: 1px solid #666;
  border-collapse: collapse;
  transition: 0.2s;
  &:hover {
    background: #666;
    color: white;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  width: 100%;
  height: 100%;
  transition: 0.2s;
  &:hover {
    color: white;
  }
`

export default Sidebar
