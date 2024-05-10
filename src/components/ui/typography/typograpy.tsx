import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './typograpy.module.scss'

type VariantsType =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  className?: string
  variant?: VariantsType
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, color = 'inherit', variant = 'body1', ...rest } = props

  return <Component className={clsx(s[variant], s[color], className)} {...rest} />
}
