import * as React from 'react'
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
import EventScheduleCreate from '../containers/event_schedule/event_schedule_create_container'
import EventScheduleEdit from '../containers/event_schedule/event_schedule_edit_container'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <EventList />
  },
  {
    path: '/events/:id/show',
    exact: false,
    component: props => <Event {...props} />
  },
  {
    path: '/events/create',
    exact: false,
    component: props => <EventCreate {...props} />
  },
  {
    path: '/events/:id/edit',
    exact: false,
    component: props => <EventEdit {...props} />
  },
  {
    path: '/companies',
    exact: true,
    component: () => <CompanyList />
  },
  {
    path: '/companies/create',
    exact: false,
    component: props => <CompanyCreate {...props} />
  },
  {
    path: '/companies/:id/edit',
    exact: false,
    component: props => <CompanyEdit {...props} />
  },
  {
    path: '/categories',
    exact: true,
    component: () => <CategoryList />
  },
  {
    path: '/categories/create',
    exact: false,
    component: props => <CategoryCreate {...props} />
  },
  {
    path: '/categories/:id/edit',
    exact: false,
    component: props => <CategoryEdit {...props} />
  },
  {
    path: '/events/:event_id/schedules/create',
    exact: false,
    component: props => <EventScheduleCreate {...props} />
  },
  {
    path: '/events/:event_id/schedules/:id/edit',
    exact: false,
    component: props => <EventScheduleEdit {...props} />
  }
]

export default routes
