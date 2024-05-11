import { ComponentProps, ElementRef, FC, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import styles from './tabs.module.scss'

type TabsTriggerProps = {
  disabled?: boolean
  label: string
  value: string
}

export type TabsProps = {
  disabled?: boolean
  label?: string
  tabs: TabsTriggerProps[]
} & ComponentProps<typeof TabsPrimitive.Root>

export const Tabs: FC<TabsProps> = forwardRef<ElementRef<'div'>, TabsProps>((props, ref) => {
  const { className, disabled, label, tabs, ...rest } = props

  const classNames = {
    label: clsx(styles.label, className, disabled && styles.disabled),
    tab: clsx(styles.tab),
    tabs: clsx(styles.tabs),
  }

  return (
    <Typography as={'div'} className={classNames.label} variant={'body2'}>
      {label}
      <TabsPrimitive.Root asChild ref={ref} {...rest}>
        <TabsPrimitive.List className={classNames.tabs} loop>
          {tabs.map(tab => (
            <TabsPrimitive.Trigger
              className={classNames.tab}
              disabled={tab?.disabled}
              key={tab.value}
              value={tab.value}
            >
              {tab.label}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
      </TabsPrimitive.Root>
    </Typography>
  )
})
