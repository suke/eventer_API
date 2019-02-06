interface Options {
  value: string | number
  name: string
}

export const createOptions = (
  params: Array<{}> = [],
  valueKey: string = '',
  nameKey: string = ''
): Array<Options> => {
  return params.map(param => {
    return {
      value: param[valueKey],
      name: param[nameKey]
    }
  })
}
