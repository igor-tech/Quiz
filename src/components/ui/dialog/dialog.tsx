import { Button } from '@/components/ui/button'
import { Modal, ModalProps } from '@/components/ui/modal'

import style from './dialog.module.scss'

type DialogProps = {
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
} & ModalProps

export const Dialog = ({
  cancelText,
  children,
  confirmText,
  onCancel,
  onConfirm,
  ...rest
}: DialogProps) => {
  return (
    <Modal {...rest}>
      {children}
      <div className={style.buttons}>
        <Button onClick={onCancel} variant={'secondary'}>
          {cancelText || 'Cancel'}
        </Button>
        <Button onClick={onConfirm}>{confirmText || 'Confirm'}</Button>
      </div>
    </Modal>
  )
}
