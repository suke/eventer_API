import API from './base'

interface eventParams {
  id?: number
  name: string
  company_id: number
  site_url: string
}

interface eventScheduleParams {
  id?: number
  event_id: number
  started_at: Date
  ended_at: Date
  address: string
}

export function createEvent({ name, company_id, site_url }: eventParams) {
  return API.post('/events', {
    name,
    company_id,
    site_url
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateEvent({ id, name, company_id, site_url }: eventParams) {
  return API.put(`/events/${id}`, {
    name,
    company_id,
    site_url
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteEvent(id: number) {
  return API.delete(`/events/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchEvents() {
  return API.get('/events')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchEvent(id: number) {
  return API.get(`/events/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchEventSchedules(id: number) {
  return API.get(`/events/schedules/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function createEventSchedule({
  event_id,
  started_at,
  ended_at,
  address
}: eventScheduleParams) {
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
}: eventScheduleParams) {
  return API.put(`/event/schedules/${id}`, {
    event_id,
    started_at,
    ended_at,
    address
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteEventSchedule(id: number) {
  return API.delete(`/event/schedules/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
