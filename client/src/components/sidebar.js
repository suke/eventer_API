import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const items = [
  {
    name: 'event',
    path: '/event'
  },
  {
    name: 'events',
    path: '/events'
  },
  {
    name: 'company',
    path: '/companies'
  },
  {
    name: 'category',
    path: '/categories'
  }
]

const Sidebar = ({ className }) => (
  <SidebarWrapper className={className}>
    <ul>
      {items.map((item, idx) => {
        return (
          <ListItem key={idx}>
            <StyledLink to={item.path}>{item.name}</StyledLink>
          </ListItem>
        )
      })}
    </ul>
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
