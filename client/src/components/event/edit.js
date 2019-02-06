import React from 'react'
import { EventForm } from '../event/form'
import Wrapper from '../main_wrapper'
import { createOptions } from '../../util'
import { useFirstMount } from '../../custom_fooks/index';

function EventEdit(props) {

  useFirstMount(props, (props) => {
    if(isFirstRef.current) {
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
      isFirstRef.current = false
    }
  })

  const { event, companies, categories, handleSubmit, history } = props
  const options = createOptions(companies, 'id', 'name')
  const categoryOptions = createOptions(categories, 'id', 'name')
  return (
    <Wrapper>
      <EventForm
        history={history}
        options={options}
        categoryOptions={categoryOptions}
        handleSubmit={handleSubmit}
        initialValues={event}
      />
    </Wrapper>
  )
}

export default EventEdit
