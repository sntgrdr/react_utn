import PropTypes from 'prop-types'
import { Calendar } from '@/components/ui/calendar'

function BookingCalendar({ selectedDate, onSelectDate }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="p-6 flex justify-center">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        disabled={(date) => date < today}
      />
    </div>
  )
}

BookingCalendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onSelectDate: PropTypes.func.isRequired
}

export default BookingCalendar
