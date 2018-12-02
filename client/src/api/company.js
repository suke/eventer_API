import API from './base'

export function fetchCompanies() {
  return API.get('/companies')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchCompany(id) {
  return API.get(`/companies/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateCompany({ id, ...data }) {
  return API.put(`/companies/${id}`, {
    name: data.name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteCompany(id) {
  return API.delete(`/companies/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
