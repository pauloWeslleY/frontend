import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../lib/axios"

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function useParticipant() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])
  const [openModalManagersParticipant, setOpenManagersParticipant] = useState(false)

  const loadParticipants = useCallback(async () => {
    const response = await api.request({
      method: 'GET',
      url: `/trips/${tripId}/participants`
    })

    setParticipants(response.data.participants)
  }, [tripId])

  useEffect(() => {
    loadParticipants()
  }, [loadParticipants])

  function openModalCreateParticipant() {
    return setOpenManagersParticipant(true)
  }

  function closeModalCreateParticipant() {
    return setOpenManagersParticipant(false)
  }

  return {
    participants,
    openModalManagersParticipant,
    openModalCreateParticipant,
    closeModalCreateParticipant,
  }
}
