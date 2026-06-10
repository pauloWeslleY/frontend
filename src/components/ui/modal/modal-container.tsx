import { ComponentProps, ReactNode } from "react"

interface ModalContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function ModalContainer({ className, ...props }: ModalContainerProps) {
  return (
    <div {...props} className={['rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5', className].join(' ')} />
  )
}
