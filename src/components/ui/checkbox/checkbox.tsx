import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/assets/icons/components/check'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import styles from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<'button'>, CheckboxProps>((props, ref) => {
  const { checked, className, disabled, label, ...rest } = props

  const classNames = {
    checkbox: styles.checkbox,
    root: clsx(styles.label, disabled && styles.disabled, className),
  }

  return (
    <Typography as={'label'} className={classNames.root}>
      <CheckboxRadix.Root className={classNames.checkbox} disabled={disabled} {...rest} ref={ref}>
        <div className={styles.frame}></div>
        {checked && (
          <CheckboxRadix.Indicator className={styles.indicator} forceMount>
            <Check />
          </CheckboxRadix.Indicator>
        )}
      </CheckboxRadix.Root>
      {label}
    </Typography>
  )
})
