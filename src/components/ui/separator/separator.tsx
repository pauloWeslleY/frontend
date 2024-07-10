import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const separatorVariants = tv({
  base: 'bg-zinc-800',
  variants: {
    variant: {
      vertical: 'w-px h-6',
      horizontal: 'w-full h-px'
    },
  },
  defaultVariants: {
    variant: 'vertical',
  }
})

interface SeparatorProps extends ComponentProps<'div'>, VariantProps<typeof separatorVariants> { }

export function Separator({ variant, ...props }: SeparatorProps) {
  return (
    <div {...props} className={separatorVariants({ variant })} />
  )
}