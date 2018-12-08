import API from './base'

export function createCategory({ name }) {
  return API.post('/categories', {
    name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchCategories() {
  return API.get('/categories')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchCategory(id) {
  return API.get(`/categories/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateCategory({ id, name }) {
  return API.put(`/categories/${id}`, {
    name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteCategory(id) {
  return API.delete(`/categories/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
