import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalHeaderProps {
  title: string
  children: ReactNode
  onClose: () => void
}

export function ModalHeader({
  title,
  children,
  onClose,
}: ModalHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>

        <button type="button" onClick={onClose}>
          <X className="size-5 text-zinc-400" />
        </button>
      </div>
      {children}
    </div>
  )
}