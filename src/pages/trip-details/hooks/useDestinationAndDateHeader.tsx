import { useState, useCallback, useEffect, FormEvent } from "react"
import { useParams } from "react-router-dom"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"
import { api } from "../../../lib/axios"

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function useDestinationAndDateHeader() {
  const [openUpdatedTripModal, setOpenUpdatedTripModal] = useState(false)
  const [destination, setDestination] = useState('')
  const [eventStartEndDates, setEventStartEndDates] = useState<DateRange | undefined>()
  const [trip, setTrip] = useState<Trip | undefined>()
  const { tripId } = useParams()

  const loadTrip = useCallback(async () => {
    const response = await api.request({
      method: 'GET',
      url: `/trips/${tripId}`
    })
    setTrip(response.data.trip)
  }, [tripId])

  useEffect(() => {
    loadTrip()
  }, [loadTrip])

  const displayedDateTrip = trip
    ? `${format(trip.starts_at, "d' de 'LLL")} até ${format(trip.ends_at, "d' de 'LLL")}`
    : null

  const displayedUpdatedDate = eventStartEndDates && eventStartEndDates.from && eventStartEndDates.to
    ? `${format(eventStartEndDates.from, "d' de 'LLL")} até ${format(eventStartEndDates.to, "d' de 'LLL")}`
    : null

  function openModalUpdatedTrip() {
    return setOpenUpdatedTripModal(true)
  }

  function closeModalUpdatedTrip() {
    return setOpenUpdatedTripModal(false)
  }

  function updatedHeaderTitle() {
    return displayedUpdatedDate === null ? displayedDateTrip : displayedUpdatedDate
  }

  async function updatedTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    await api.request({
      method: 'PUT',
      url: `/trips/${tripId}`,
      data: {
        destination: destination === '' ? trip?.destination : destination,
        starts_at: eventStartEndDates && eventStartEndDates?.from ? eventStartEndDates?.from : trip?.starts_at,
        ends_at: eventStartEndDates && eventStartEndDates?.to ? eventStartEndDates?.to : trip?.ends_at,
      },
    })

    window.document.location.reload()
  }

  return {
    trip,
    openUpdatedTripModal,
    eventStartEndDates,
    updatedTrip,
    setDestination,
    setEventStartEndDates,
    openModalUpdatedTrip,
    closeModalUpdatedTrip,
    updatedHeaderTitle,
  }
}
