import { useState, FormEvent } from "react"
import { DateRange } from "react-day-picker"
import { useNavigate } from "react-router-dom"
import { api } from "../../../lib/axios"

export function useCreateTrip() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartEndDates, setEventStartEndDates] = useState<DateRange | undefined>()

  const [emailsToInvite, setEmailsToInvite] = useState([
    'weslleydesign13@gmail.com'
  ])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return alert('Email já existente!!')
    }

    setEmailsToInvite((prevState) => [...prevState, email])

    event.currentTarget.reset()
  }

  function deleteEmailFromInvite(emailToRemove: string) {
    setEmailsToInvite((prevState) => prevState.filter(props => props !== emailToRemove))
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!destination) {
      return
    }

    if (!eventStartEndDates?.from || !eventStartEndDates.to) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    if (!ownerEmail || !ownerName) {
      return
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartEndDates.from,
      ends_at: eventStartEndDates.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
  }

  return {
    createTrip,
    isGuestsInputOpen,
    isGuestsModalOpen,
    isConfirmTripModalOpen,
    setDestination,
    setOwnerEmail,
    setOwnerName,
    setEventStartEndDates,
    openGuestsInput,
    closeGuestsInput,
    openGuestsModal,
    deleteEmailFromInvite,
    closeGuestsModal,
    closeConfirmTripModal,
    openConfirmTripModal,
    addNewEmailToInvite,
    eventStartEndDates,
    emailsToInvite,
  }
}
