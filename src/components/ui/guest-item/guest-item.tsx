import { ReactElement } from "react";

interface GuestItemProps {
  text: string
  description: string
  icon: ReactElement
}

export function GuestItem({ text, description, icon }: GuestItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <span className="block font-medium text-zinc-100">{text}</span>
        <span className="block text-sm text-zinc-400 truncate">
          {description}
        </span>
      </div>
      {icon}
    </div>
  )
}