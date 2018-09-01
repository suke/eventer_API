// action tyoe
export const FETCH_COMPANIES = 'FETCH_COMPANIES'
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS'

// action creators
export const fetchCompanies = () => ({
  type: FETCH_COMPANIES
})

export const fetchCompaniesSuccess = data => ({
  type: FETCH_COMPANIES_SUCCESS,
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
