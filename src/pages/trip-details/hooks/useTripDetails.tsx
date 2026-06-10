import { useState } from "react"

export function useTripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return {
    isCreateActivityModalOpen,
    openCreateActivityModal,
    closeCreateActivityModal,
  }
}
