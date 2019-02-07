import * as React from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

export default ({ value, onChange }) => {
  const date = value ? dayjs(value).toDate() : null
  return (
    <StyledDatePicker
      selected={date}
      onChange={onChange}
      dateFormat="YYYY/MM/dd HH:mm"
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
