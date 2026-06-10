import { CircleCheck, CircleDashed } from "lucide-react";

interface ActivityItemProps {
  title: string
  hour: string
  hasActive: boolean
}

export function ActivityItem({ title, hour, hasActive = false }: ActivityItemProps) {
  return (
    <div className="space-y-2.5">
      <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
        {hasActive ? (
          <CircleCheck className="size-5 text-lime-300" />
        ) : (
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        )}
        <span className="text-zinc-100">{title}</span>
        <span className="text-zinc-400 text-sm ml-auto">{hour}</span>
      </div>
    </div>
  )
}