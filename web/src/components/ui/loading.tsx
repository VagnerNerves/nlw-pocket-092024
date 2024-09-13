import type { ComponentProps } from 'react'
import { LoaderCircle } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type LoadingProps = {
  divProps?: ComponentProps<'div'>
}
export function Loading({ divProps }: LoadingProps) {
  return (
    <div
      {...divProps}
      className={twMerge(
        'flex items-center justify-center',
        divProps?.className
      )}
    >
      <LoaderCircle className="text-zinc-50 animate-spin" />
    </div>
  )
}
