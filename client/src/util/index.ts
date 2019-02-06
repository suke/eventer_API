interface Option {
  value: string | number
  name: string
}

interface Param {
  [key: string]: string
}

export const createOptions = (
  params: Array<Param> = [],
  valueKey: string = '',
  nameKey: string = ''
): Array<Option> => {
  return params.map(param => {
    return {
      value: param[valueKey],
      name: param[nameKey]
    }
  })
}
