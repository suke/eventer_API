import API from './base'

export function createEvent({ name, company_id }) {
  return API.post('/events', {
    name,
    company_id
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateEvent({ id, name, company_id }) {
  return API.put(`/events/${id}`, {
    name,
    company_id
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteEvent(id) {
  return API.delete(`/events/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchEvents() {
  return API.get('/events')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchEventSchedule(id) {
  return API.get(`/event/schedules/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
