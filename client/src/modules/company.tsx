import { Company } from '../interfaces/company';
import { History } from 'history';

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

export const CURRENT_COMPANY = 'CURRENT_COMPANY'
export const FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY =
  'FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY'
// action creators
export const createCompany = ({ data, history }: {data: Company, history: History}) => ({
  type: CREATE_COMPANY as typeof CREATE_COMPANY,
  payload: {
    data,
    history
  }
})

export const createCompanySuccess = (data: Company) => ({
  type: CREATE_COMPANY_SUCCESS as typeof CREATE_COMPANY_SUCCESS,
  payload: {
    data
  }
})

export const updateCompany = ({ data, history }: {data: Company, history: History}) => ({
  type: UPDATE_COMPANY as typeof UPDATE_COMPANY,
  payload: {
    data,
    history
  }
})

export const updateCompanySuccess = (data: Company) => ({
  type: UPDATE_COMPANY_SUCCESS as typeof UPDATE_COMPANY_SUCCESS,
  payload: {
    data
  }
})

export const fetchCompanies = () => ({
  type: FETCH_COMPANIES as typeof FETCH_COMPANIES
})

export const fetchCompaniesSuccess = (data: Array<Company>) => ({
  type: FETCH_COMPANIES_SUCCESS as typeof FETCH_COMPANIES_SUCCESS,
  payload: {
    data
  }
})

export const fetchCompaniesAndSelectCurrentCompany = (id: number) => ({
  type: FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY as typeof FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY,
  payload: {
    id
  }
})

export const deleteCompany = (id: number) => ({
  type: DELETE_COMPANY as typeof DELETE_COMPANY,
  payload: {
    id
  }
})

export const deleteCompanySuccess = (data: Company) => ({
  type: DELETE_COMPANY_SUCCESS as typeof DELETE_COMPANY_SUCCESS,
  payload: {
    data
  }
})

export const currentCompany = (data: Company) => ({
  type: CURRENT_COMPANY as typeof CURRENT_COMPANY,
  payload: {
    data
  }
})

type CompanyActions =
  | ReturnType<typeof createCompany>
  | ReturnType<typeof createCompanySuccess>
  | ReturnType<typeof updateCompany>
  | ReturnType<typeof updateCompanySuccess>
  | ReturnType<typeof fetchCompanies>
  | ReturnType<typeof fetchCompaniesSuccess>
  | ReturnType<typeof fetchCompaniesAndSelectCurrentCompany>
  | ReturnType<typeof deleteCompany>
  | ReturnType<typeof deleteCompanySuccess>
  | ReturnType<typeof currentCompany>

interface CompanyState {
  currentCompany: Company
  companies: Array<Company>
}


const initialState: CompanyState = {
  currentCompany: { id: 1, name: '' },
  companies: []
}

export default function companyReducer(state = initialState, action: CompanyActions) {
  switch (action.type) {
    case CURRENT_COMPANY:
      return { ...state, currentCompany: { ...action.payload.data } }
    case CREATE_COMPANY_SUCCESS:
      return { ...state, companies: [...state.companies, action.payload.data] }
    case FETCH_COMPANIES_SUCCESS:
      return { ...state, companies: [...action.payload.data] }
    case UPDATE_COMPANY_SUCCESS:
      const updateIndex = state.companies.findIndex(company => {
        return company.id === action.payload.data.id
      })
      const newCompanies = [...state.companies]
      newCompanies.splice(updateIndex, 1, action.payload.data)
      return {
        ...state,
        currentCompany: action.payload.data,
        companies: newCompanies
      }
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        companies: [...state.companies].filter(company => {
          return company.id !== action.payload.data.id
        })
      }
    default:
      return state
  }
}
