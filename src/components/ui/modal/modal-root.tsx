import { ComponentProps, ReactNode } from "react"

interface ModalRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function ModalRoot({ ...props }: ModalRootProps) {
  return (
    <div {...props} className="fixed inset-0 bg-black/60 flex items-center justify-center" />
  )
}