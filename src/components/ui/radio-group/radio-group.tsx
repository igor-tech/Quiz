import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import styles from './radio-group.module.scss'

export type OptionType = {
  label: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  errorMessage?: string
  options: OptionType[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup: FC<RadioGroupProps> = forwardRef<
  ElementRef<typeof RadioGroupRadix.Root>,
  RadioGroupProps
>((props, ref) => {
  const { className, errorMessage, options, ...rest } = props

  const classNames = {
    indicator: styles.indicator,
    item: styles.item,
    label: clsx(styles.label, rest.disabled && styles.disabled),
    root: clsx(className, styles.root),
  }

  return (
    <RadioGroupRadix.Root className={classNames.root} {...rest} ref={ref}>
      {options.map(option => (
        <Typography as={'label'} className={classNames.label} key={option.value} variant={'body2'}>
          <RadioGroupRadix.Item className={classNames.item} value={option.value}>
            <RadioGroupRadix.Indicator className={classNames.indicator} />

            <span className={styles.frame}></span>
          </RadioGroupRadix.Item>

          {option.label}
        </Typography>
      ))}

      {!!errorMessage && (
        <Typography className={styles.error} variant={'caption'}>
          {errorMessage}
        </Typography>
      )}
    </RadioGroupRadix.Root>
  )
})
