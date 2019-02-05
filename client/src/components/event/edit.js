import React, { Component } from 'react'
import { EventForm } from '../event/form'
import Wrapper from '../main_wrapper'
import { createOptions } from '../../util'

class EventEdit extends Component {
  componentDidMount() {
    const {
      currentEvent,
      fetchCompanies,
      fetchCategories,
      events,
      match
    } = this.props
    const event = events.find(event => {
      return event.id === parseInt(match.params.id)
    })
    fetchCompanies()
    fetchCategories()
    currentEvent(event)
  }

  render() {
    const { event, companies, categories, handleSubmit, history } = this.props
    const options = createOptions(companies, 'id', 'name')
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
}

export default EventEdit
