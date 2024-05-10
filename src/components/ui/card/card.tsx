import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import styles from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<ElementRef<'div'>, CardProps>(({ className, ...rest }, ref) => {
  return <div className={clsx(styles.card, className)} ref={ref} {...rest} />
})
