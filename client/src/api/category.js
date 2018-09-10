import API from './base'

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

export function updateCategory({ id, data }) {
  return API.put(`/categories/${id}`, {
    name: data.name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteCategory(id) {
  return API.delete(`/categories/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
