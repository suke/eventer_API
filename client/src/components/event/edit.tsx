import * as React from 'react'
import { EventForm } from './form'
import Wrapper from '../main_wrapper'
import { createOptions } from '../../util'
import { useOnMount } from '../../custom_fooks/index'

function EventEdit(props) {
  useOnMount(props, props => {
    const {
      currentEvent,
      fetchCompanies,
      fetchCategories,
      events,
      match
    } = props
    const event = events.find(event => {
      return event.id === parseInt(match.params.id)
    })
    fetchCompanies()
    fetchCategories()
    currentEvent(event)
  })

  const { event, companies, categories, handleSubmit, history } = props
  const options = createOptions(companies, 'id', 'name')
  const categoryOptions = createOptions(categories, 'id', 'name')
  return (
    <Wrapper>
      <EventForm
        history={history}
        options={options}
        handleSubmit={handleSubmit}
        initialValues={event}
      />
    </Wrapper>
  )
}

export default EventEdit
