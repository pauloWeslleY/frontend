import { ReactNode } from "react"

interface ModalContainerProps {
  children: ReactNode
}

export function ModalContainer({ children }: ModalContainerProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {children}
      </div>
    </div>
  )
}
