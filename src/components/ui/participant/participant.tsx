import { CircleCheck, CircleDashed } from "lucide-react"

interface ParticipantProps {
  name: string | null
  email: string
  hasActive: boolean
}

export function Participant({ name = '', email = '', hasActive = false }: ParticipantProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <span className="block font-medium text-zinc-100">{name}</span>
        <span className="block text-sm text-zinc-400 truncate">
          {email}
        </span>
      </div>
      {hasActive ? (
        <CircleCheck className="size-5 text-lime-300" />
      ) : (
        <CircleDashed className="text-zinc-400 size-5 shrink-0" />
      )}
    </div>
  )
}