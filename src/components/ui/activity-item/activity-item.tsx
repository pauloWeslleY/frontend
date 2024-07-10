import { ReactElement } from "react";

interface ActivityItemProps {
  title: string
  hour: string
  icon: ReactElement
}

export function ActivityItem({ title, hour, icon }: ActivityItemProps) {
  return (
    <div className="space-y-2.5">
      <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
        {icon}
        <span className="text-zinc-100">{title}</span>
        <span className="text-zinc-400 text-sm ml-auto">{hour}</span>
      </div>
    </div>
  )
}