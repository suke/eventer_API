// action type
export const CREATE_COMPANY = 'CREATE_COMPANY'
export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS'

export const UPDATE_COMPANY = 'UPDATE_COMPANY'
export const UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS'

export const DELETE_COMPANY = 'DELETE_COMPANY'
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS'

export const FETCH_COMPANY = 'FETCH_COMPANY'
export const FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS'

export const FETCH_COMPANIES = 'FETCH_COMPANIES'
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS'

// action creators
export const createCompany = ({ data, history }) => ({
  type: CREATE_COMPANY,
  payload: {
    data,
    history
  }
})

export const createCompanySuccess = data => ({
  type: CREATE_COMPANY_SUCCESS,
  payload: {
    data
  }
})

export const updateCompany = ({ data, history }) => ({
  type: UPDATE_COMPANY,
  payload: {
    data,
    history
  }
})

export const updateCompanySuccess = data => ({
  type: UPDATE_COMPANY_SUCCESS,
  payload: {
    data
  }
})

export const fetchCompanies = () => ({
  type: FETCH_COMPANIES
})

export const fetchCompaniesSuccess = data => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload: {
    data
  }
})

export const deleteCompany = id => ({
  type: DELETE_COMPANY,
  payload: {
    id
  }
})

export const deleteCompanySuccess = data => ({
  type: DELETE_COMPANY_SUCCESS,
  payload: {
    data
  }
})

const initialState = {
  companies: []
}

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return { ...state, companies: [...action.payload.data] }
    default:
      return state
  }
}
