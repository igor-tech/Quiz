import { ElementRef, forwardRef } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'

import styles from './profile-info.module.scss'

export type ProfileInfoProps = {
  avatar: string
  email: string
  name: string
}

export const ProfileInfo = forwardRef<ElementRef<'div'>, ProfileInfoProps>(
  ({ avatar, email, name }: ProfileInfoProps, ref) => {
    return (
      <div className={styles.wrapper} ref={ref}>
        <Avatar src={avatar} />
        <div className={styles.info}>
          <Typography variant={'subtitle2'}>{name}</Typography>
          <Typography className={styles.email} variant={'caption'}>
            {email}
          </Typography>
        </div>
      </div>
    )
  }
)
