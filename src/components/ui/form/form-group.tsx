import { ComponentProps, ElementType, ReactNode } from "react"

interface FormGroupProps extends ComponentProps<'div'> {
  children: ReactNode
  icon: ElementType
}

export function FormGroup({ children, icon: Icon, className }: FormGroupProps) {
  return (
    <div className={['flex items-center gap-2', className].join(' ')}>
      <Icon className="text-zinc-400 size-5" />
      {children}
    </div>
  )
}