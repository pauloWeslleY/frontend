import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<'input'> {
  isDisabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isDisabled, className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        disabled={isDisabled}
        className={['bg-transparent text-lg placeholder-zinc-400 outline-none', className].join(' ')}
      />
    )
  })