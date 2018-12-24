import React from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('ja')

export default ({ value, onChange }) => {
  const date = dayjs(value).toDate()
  return (
    <StyledDatePicker
      selected={date || null}
      onChange={onChange}
      dateFormat="YYYY/MM/dd hh:mm:ss"
      showTimeSelect
      timeIntervals={10}
      timeCaption="time"
      timeFormat="HH:mm"
    />
  )
}

const StyledDatePicker = styled(DatePicker)`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`
