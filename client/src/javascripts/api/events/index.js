import Api from '../base'

export function getEvents() {
  return Api.get('/events')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
