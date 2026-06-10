import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../lib/axios"

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function useActivities() {
  const { tripId } = useParams()
  const [activities, setActivities] = useState<Activity[]>([])

  const loadActivity = useCallback(async () => {
    const response = await api.request({
      method: 'GET',
      url: `/trips/${tripId}/activities`,
    })

    setActivities(response.data.activities)
  }, [tripId])


  useEffect(() => {
    loadActivity()
  }, [loadActivity])

  return { activities }
}
