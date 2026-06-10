import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

interface UseDestinationAndDateStepProps {
  eventStartEndDates: DateRange | undefined
}

export function useDestinationAndDateStep({ eventStartEndDates }: UseDestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const displayedDate = eventStartEndDates && eventStartEndDates.from && eventStartEndDates.to
    ? `${format(eventStartEndDates.from, "d' de 'LLL")} até ${format(eventStartEndDates.to, "d' de 'LLL")}`
    : null

  return {
    displayedDate,
    isDatePickerOpen,
    openDatePicker,
    closeDatePicker,
  }
}
