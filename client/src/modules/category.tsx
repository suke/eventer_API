import { Category } from '../interfaces/category'
import { History } from 'history'

// action type
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS'

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS'

export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'

export const FETCH_CATEGORY = 'FETCH_CATEGORY'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'

export const CURRENT_CATEGORY = 'CURRENT_CATEGORY'

export const FETCH_CATEGORIES_AND_SELECT_CURRENT_CATEGORY =
  'FETCH_CATEGORIES_AND_SELECT_CURRENT_CATEGORY'
// action creators
export const createCategory = ({
  data,
  history
}: {
  data: Category
  history: History
}) => ({
  type: CREATE_CATEGORY as typeof CREATE_CATEGORY,
  payload: {
    data,
    history
  }
})

export const createCategorySuccess = (data: Category) => ({
  type: CREATE_CATEGORY_SUCCESS as typeof CREATE_CATEGORY_SUCCESS,
  payload: {
    data
  }
})

export const updateCategory = ({
  data,
  history
}: {
  data: Category
  history: History
}) => ({
  type: UPDATE_CATEGORY as typeof UPDATE_CATEGORY,
  payload: {
    data,
    history
  }
})

export const updateCategorySuccess = (data: Category) => ({
  type: UPDATE_CATEGORY_SUCCESS as typeof UPDATE_CATEGORY_SUCCESS,
  payload: {
    data
  }
})

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES as typeof FETCH_CATEGORIES
})

export const fetchCategoriesSuccess = (data: Array<Category>) => ({
  type: FETCH_CATEGORIES_SUCCESS as typeof FETCH_CATEGORIES_SUCCESS,
  payload: {
    data
  }
})

export const fetchCategoriesAndSelectCurrentCategory = (id: number) => ({
  type: FETCH_CATEGORIES_AND_SELECT_CURRENT_CATEGORY as typeof FETCH_CATEGORIES_AND_SELECT_CURRENT_CATEGORY,
  payload: {
    id
  }
})

export const deleteCategory = (id: number) => ({
  type: DELETE_CATEGORY as typeof DELETE_CATEGORY,
  payload: {
    id
  }
})

export const deleteCategorySuccess = (data: Category) => ({
  type: DELETE_CATEGORY_SUCCESS as typeof DELETE_CATEGORY_SUCCESS,
  payload: {
    data
  }
})

export const currentCategory = (data: Category) => ({
  type: CURRENT_CATEGORY as typeof CURRENT_CATEGORY,
  payload: {
    data
  }
})

type Actions =
  | ReturnType<typeof createCategory>
  | ReturnType<typeof createCategorySuccess>
  | ReturnType<typeof updateCategory>
  | ReturnType<typeof updateCategorySuccess>
  | ReturnType<typeof fetchCategories>
  | ReturnType<typeof fetchCategoriesSuccess>
  | ReturnType<typeof fetchCategoriesAndSelectCurrentCategory>
  | ReturnType<typeof deleteCategory>
  | ReturnType<typeof deleteCategorySuccess>
  | ReturnType<typeof currentCategory>

interface CategoryState {
  currentCategory: Category
  categories: Array<Category>
}

const initialState: CategoryState = {
  currentCategory: { id: null, name: '' },
  categories: []
}

export default function categoryReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case CURRENT_CATEGORY:
      return { ...state, currentCategory: { ...action.payload.data } }
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload.data]
      }
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: [...action.payload.data] }
    case UPDATE_CATEGORY_SUCCESS:
      const updateIndex = state.categories.findIndex(category => {
        return category.id === action.payload.data.id
      })
      const newCategories = [...state.categories]
      newCategories.splice(updateIndex, 1, action.payload.data)
      return {
        ...state,
        currentCategory: action.payload.data,
        categories: newCategories
      }
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories].filter(category => {
          return category.id !== action.payload.data.id
        })
      }
    default:
      return state
  }
}
