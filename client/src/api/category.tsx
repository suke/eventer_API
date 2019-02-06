import API from './base'
import { Category } from '../interfaces/category'

export function createCategory({ name }: { name: string }) {
  return API.post<Category>('/categories', {
    name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchCategories() {
  return API.get<Category>('/categories')
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function fetchCategory(id: number) {
  return API.get<Category>(`/categories/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function updateCategory({ id, name }: { id: number; name: string }) {
  return API.put<Category>(`/categories/${id}`, {
    name
  })
    .then(result => ({ result }))
    .catch(err => ({ err }))
}

export function deleteCategory(id: number) {
  return API.delete(`/categories/${id}`)
    .then(result => ({ result }))
    .catch(err => ({ err }))
}
