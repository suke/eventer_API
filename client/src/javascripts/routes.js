import React from 'react'
import EventList from './containers/event_list_container'
import Event from './containers/event_container'
import CompanyList from './components/company_list'
import CategoryList from './components/category_list'

const routes = [
  {
    path: '/event',
    exact: true,
    component: () => <EventList />
  },
  {
    path: '/events',
    exact: true,
    component: () => <EventList />
  },
  {
    path: '/events/:id/show',
    exact: true,
    component: props => <Event {...props} />
  },
  {
    path: '/events/:id',
    exact: true,
    component: props => <Event {...props} />
  },
  {
    path: '/companies',
    exact: true,
    component: () => <CompanyList />
  },
  {
    path: '/categories',
    exact: true,
    component: () => <CategoryList />
  }
]

export default routes
