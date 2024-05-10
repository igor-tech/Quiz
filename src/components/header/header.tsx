import { Link } from 'react-router-dom'

import { Logo } from '@/assets/icons/components/Logo'
import { PATHS } from '@/common/constants/path'
import { ProfileInfoProps } from '@/components/header/profile-info'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import styles from './header.module.scss'

type HeaderProps = {
  isAuth: boolean
  user?: ProfileInfoProps | null
}

export const Header = ({ isAuth, user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to={'/'}>
          <Logo className={styles.logo} />
        </Link>

        {!isAuth && (
          <Button as={Link} to={'/sign-in'} variant={'secondary'}>
            Sign In
          </Button>
        )}

        {isAuth && (
          <div className={styles.user}>
            <Typography as={Link} className={styles.name} to={PATHS.PROFILE} variant={'subtitle1'}>
              {user?.name || 'Ivan'}
            </Typography>

            <Avatar />
          </div>
        )}
      </div>
    </header>
  )
}
