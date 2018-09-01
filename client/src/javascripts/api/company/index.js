import API from '../base'

export function fetchCompanies() {
  return API.get('/companies')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
