import { useState, useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../lib/axios"

interface Links {
  id: string
  title: string
  url: string
}

export function useLinks() {
  const { tripId } = useParams()
  const [openCreateLinkModal, setOpenCreateLinkModal] = useState(false)
  const [links, setLinks] = useState<Links[]>([])

  const loadLinks = useCallback(async () => {
    const response = await api.request({
      method: 'GET',
      url: `/trips/${tripId}/links`,
    })

    setLinks(response.data.links)
  }, [tripId])

  useEffect(() => {
    loadLinks()
  }, [loadLinks])

  function openModalCreateLink() {
    return setOpenCreateLinkModal(true)
  }

  function closeModalCreateLink() {
    return setOpenCreateLinkModal(false)
  }

  return {
    links,
    openCreateLinkModal,
    openModalCreateLink,
    closeModalCreateLink
  }
}
