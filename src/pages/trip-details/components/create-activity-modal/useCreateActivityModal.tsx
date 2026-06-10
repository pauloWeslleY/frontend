import { FormEvent } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../../lib/axios"

export function useCreateActivityModal() {
  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    if (!title || !occurs_at) {
      return
    }

    await api.request({
      method: 'POST',
      url: `/trips/${tripId}/activities`,
      headers: { 'Content-Type': 'application/json' },
      data: { occurs_at, title, }
    })

    window.document.location.reload()
    event.currentTarget.reset()
  }

  return { createActivity }
}
