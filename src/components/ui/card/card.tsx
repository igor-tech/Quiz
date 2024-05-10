import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={`${s.card} ${className}`} {...rest}>
      {children}
    </div>
  )
}
