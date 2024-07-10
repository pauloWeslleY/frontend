import { ComponentProps, ElementType } from "react";

interface TitleProps extends ComponentProps<'div'> {
  title: string
  icon: ElementType
}

export function Title({ title, icon: Icon, className, ...props }: TitleProps) {
  return (
    <div {...props} className={["flex items-center gap-2", className].join(' ')}>
      <Icon className="size-5 text-zinc-400" />
      <span className="text-zinc-100">{title}</span>
    </div>
  )
}