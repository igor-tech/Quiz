import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import styles from './avatar.module.scss'

export type AvatarProps = {
  size?: CSSProperties['height']
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({ alt, className, size = '36px', src, ...rest }: AvatarProps) => {
  const classNames = clsx(styles.avatar, className)

  const defaultAvatar = 'src/assets/images/default-avatar.jpg'

  return (
    <img
      alt={alt || 'avatar'}
      className={classNames}
      src={src || defaultAvatar}
      style={{ height: size, width: size }}
      {...rest}
    />
  )
}
