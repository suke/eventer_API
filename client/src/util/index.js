export const createOptions = (params = [], valueKey = '', nameKey = '') => {
  return params.map(param => {
    return {
      value: param[valueKey],
      name: param[nameKey]
    }
  })
}
