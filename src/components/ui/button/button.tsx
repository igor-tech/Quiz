import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type PolymorphicRef<T extends ElementType = 'button'> = ComponentPropsWithRef<T>['ref']

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref?: PolymorphicRef<T>) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      <Component
        className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
        ref={ref}
        {...rest}
      />
    )
  }
)
