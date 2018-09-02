import React from 'react'
import EventList from '../containers/event/event_list_container'
import Event from '../containers/event/event_container'
import EventCreate from '../containers/event/event_create_container'
import EventEdit from '../containers/event/event_edit_container'
import CompanyList from '../components/company_list'
import CategoryList from '../components/category_list'

const routes = [
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
    path: '/events/create',
    exact: true,
    component: () => <EventCreate />
  },
  {
    path: '/events/:id/edit',
    exact: true,
    component: props => <EventEdit {...props} />
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
