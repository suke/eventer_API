import React from 'react'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('ja')

export default ({ value, onChange }) => {
  const date = dayjs(value).toDate()
  return <DatePicker selected={date || null} onChange={onChange} />
}
