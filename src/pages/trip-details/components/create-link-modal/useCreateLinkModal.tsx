import { FormEvent } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../../lib/axios"

interface UseCreateLinkModal {
  links: {
    id: string
    title: string
    url: string
  }[]
}


export function useCreateLinkModal({ links }: UseCreateLinkModal) {
  const { tripId } = useParams()

  async function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const title = data.get('title-link')?.toString()
    const url = data.get('url')?.toString()
    const isLinkExists = links.some((link) => link.title === title)

    if (!title || !url) {
      return
    }

    if (isLinkExists) {
      return alert('Link já cadastrado')
    }

    await api.request({
      method: 'POST',
      url: `/trips/${tripId}/links`,
      data: { title, url, }
    })

    window.document.location.reload()
  }

  return { createLink }
}
