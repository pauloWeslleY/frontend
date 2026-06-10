import { Link2 } from "lucide-react";

interface LinkItemProps {
  text: string
  href: string
}

export function LinkItem({ text = '', href = '' }: LinkItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <span className="block font-medium text-zinc-100">{text}</span>
        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
          {href}
        </a>
      </div>
      <Link2 className="text-zinc-400 size-5 shrink-0" />
    </div>
  )
}