import React from 'react'
import EventList from '../containers/event/event_list_container'
import Event from '../containers/event/event_container'
import EventCreate from '../containers/event/event_create_container'
import EventEdit from '../containers/event/event_edit_container'
import CompanyList from '../containers/company/company_list_container'
import CompanyCreate from '../containers/company/company_create_container'
import CompanyEdit from '../containers/company/company_edit_container'
import CategoryList from '../containers/category/category_list_container'
import CategoryCreate from '../containers/category/category_create_container'
import CategoryEdit from '../containers/category/category_edit_container'

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
    path: '/companies/create',
    exact: true,
    component: props => <CompanyCreate {...props} />
  },
  {
    path: '/companies/:id/edit',
    exact: true,
    component: props => <CompanyEdit {...props} />
  },
  {
    path: '/categories',
    exact: true,
    component: () => <CategoryList />
  },
  {
    path: '/categories/create',
    exact: true,
    component: props => <CategoryCreate {...props} />
  },
  {
    path: '/categories/:id/edit',
    exact: true,
    component: props => <CategoryEdit {...props} />
  }
]

export default routes
