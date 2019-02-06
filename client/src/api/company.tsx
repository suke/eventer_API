import API from './base'

export function createCompany({ name }: { name: string }) {
  return API.post('/companies', {
    name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchCompanies() {
  return API.get('/companies')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchCompany(id: number) {
  return API.get(`/companies/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateCompany({ id, name }: { id: number; name: string }) {
  return API.put(`/companies/${id}`, {
    name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteCompany(id: number) {
  return API.delete(`/companies/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
