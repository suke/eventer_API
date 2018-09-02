import API from '../base'

export function createEvent(data) {
  return API.post('/events', {
    name: data.name,
    company_id: data.company_id
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateEvent({ id, ...data }) {
  return API.put(`/events/${id}`, {
    name: data.name,
    company_id: data.company_id
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
