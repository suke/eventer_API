import API from '../base'

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
