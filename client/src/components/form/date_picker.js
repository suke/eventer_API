import React from 'react'
import DatePicker from 'react-datepicker'

export default ({ value, onChange }) => {
  return <DatePicker selected={value || null} onChange={onChange} />
}
