import React from 'react'
import Event from './containers/event'
import Company from './components/company'
import Category from './components/category'

const routes = [
  {
    name: 'event',
    path: '/',
    exact: true,
    main: () => <Event />
  },
  {
    name: 'company',
    path: '/company',
    main: () => <Company />
  },
  {
    name: 'category',
    path: '/category',
    main: () => <Category />
  }
]

export default routes
