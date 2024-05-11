import { ForwardedRef, forwardRef } from 'react'

import { Check } from '@/assets/icons/components/check'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import styles from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = forwardRef((props: CheckboxProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { checked, className, disabled, label, onChange, ...rest } = props

  const classNames = {
    checkbox: styles.checkbox,
    root: clsx(styles.label, disabled && styles.disabled, className),
  }

  return (
    <Typography as={'label'} className={classNames.root}>
      <CheckboxRadix.Root
        className={classNames.checkbox}
        disabled={disabled}
        onCheckedChange={onChange}
        {...rest}
        ref={ref}
      >
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
