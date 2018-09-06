import React from 'react'
import EventList from '../containers/event/event_list_container'
import Event from '../containers/event/event_container'
import EventCreate from '../containers/event/event_create_container'
import EventEdit from '../containers/event/event_edit_container'
import CompanyList from '../components/company/list'
import CategoryList from '../components/category/list'

const routes = [
  {
    path: '/',
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
    component: props => <EventCreate {...props} />
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
