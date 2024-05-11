import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import styles from './icon-button.module.scss'

type IconVariant = 'default' | 'small'

type IconButtonProps = {
  variant?: IconVariant
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, variant = 'default', ...rest }, ref) => {
    const classNames = clsx(styles.button, variant === 'small' && styles.small, className)

    return (
      <button ref={ref} {...rest} className={classNames}>
        {children}
      </button>
    )
  }
)
