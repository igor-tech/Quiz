import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets/icons/components/Close'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import style from './modal.module.scss'

type ModalProps = {
  children: ReactNode
  onOpenChange: (open: boolean) => void
  open: boolean
  title: string
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = (props: ModalProps) => {
  const { children, title, ...rest } = props

  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className={style.overlay} />
        <Dialog.Content className={style.content} forceMount>
          <header className={style.header}>
            <Dialog.Title asChild>
              <Typography as={'h3'} variant={'h3'}>
                {title}
              </Typography>
            </Dialog.Title>
            <Dialog.Close className={style.close}>
              <Close aria-label={'Close'} />
            </Dialog.Close>
          </header>
          <div className={style.main}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
