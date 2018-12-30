import API from './base'

export function createEvent({ name, company_id, site_url }) {
  return API.post('/events', {
    name,
    company_id,
    site_url
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateEvent({ id, name, company_id, site_url }) {
  return API.put(`/events/${id}`, {
    name,
    company_id,
    site_url
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

export function fetchEvent(id) {
  return API.get(`/events/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchEventSchedules(id) {
  return API.get(`/event/schedules/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function createEventSchedule({
  event_id,
  started_at,
  ended_at,
  address
}) {
  return API.post('/event/schedules/', {
    event_id,
    started_at,
    ended_at,
    address
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateEventSchedule({
  id,
  event_id,
  started_at,
  ended_at,
  address
}) {
  return API.put(`/event/schedules/${id}`, {
    event_id,
    started_at,
    ended_at,
    address
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteEventSchedule(id) {
  return API.delete(`/event/schedules/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
