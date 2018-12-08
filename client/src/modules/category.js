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
// action creators
export const createCategory = ({ data, history }) => ({
  type: CREATE_CATEGORY,
  payload: {
    data,
    history
  }
})

export const createCategorySuccess = data => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: {
    data
  }
})

export const updateCategory = ({ data, history }) => ({
  type: UPDATE_CATEGORY,
  payload: {
    data,
    history
  }
})

export const updateCategorySuccess = data => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload: {
    data
  }
})

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
})

export const fetchCategoriesSuccess = data => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: {
    data
  }
})

export const deleteCategory = id => ({
  type: DELETE_CATEGORY,
  payload: {
    id
  }
})

export const deleteCategorySuccess = data => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: {
    data
  }
})

export const currentCategory = data => ({
  type: CURRENT_CATEGORY,
  payload: {
    data
  }
})

const initialState = {
  currentCategory: {},
  categories: []
}

export default function categoryReducer(state = initialState, action) {
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
        categories: newCompanies
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