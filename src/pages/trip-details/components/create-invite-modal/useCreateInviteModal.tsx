import { FormEvent } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../../lib/axios"
import { useParticipant } from "../../hooks"

export function useCreateInviteModal() {
  const { tripId } = useParams()

  const { participants } = useParticipant()

  async function createInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()
    const isInviteExits = participants.some((participant) => participant.email === email)

    if (isInviteExits) {
      return alert('Invite já cadastrado')
    }

    if (!email) {
      return alert('Preencha o campo email')
    }

    await api.request({
      method: 'POST',
      url: `/trips/${tripId}/invites`,
      data: { email },
    })

    window.document.location.reload()
  }

  return { createInvite }
}
