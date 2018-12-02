import React, { Component } from 'react'
import { EditForm } from '../../containers/form/form_container'
import Wrapper from '../main_wrapper'
import { createOptions } from '../../util'

class EventEdit extends Component {
  componentDidMount() {
    const { currentEvent, fetchCompanies, events, match } = this.props
    const event = events.find(event => {
      return event.id === parseInt(match.params.id)
    })

    fetchCompanies()
    currentEvent(event)
  }

  render() {
    const { companies, handleSubmit, history } = this.props
    const options = createOptions(companies, 'id', 'name')
    return (
      <Wrapper>
        <EditForm history={history} options={options} onSubmit={handleSubmit} />
      </Wrapper>
    )
  }
}

export default EventEdit
