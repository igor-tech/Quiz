import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

import styles from './icon-button.module.scss'

type IconVariant = 'default' | 'small'

type IconButtonProps = {
  Icon: ReactNode
  variant?: IconVariant
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, className, variant = 'default', ...rest }, ref) => {
    const classNames = clsx(styles.button, variant === 'small' && styles.small, className)

    return (
      <button ref={ref} {...rest} className={classNames}>
        {Icon}
      </button>
    )
  }
)
