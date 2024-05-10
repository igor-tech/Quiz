import { Link } from 'react-router-dom'

import { Logo } from '@/assets/icons/components/logo'
import { Logout } from '@/assets/icons/components/logout'
import { Profile } from '@/assets/icons/components/profile'
import { PATHS } from '@/common/constants/path'
import { ProfileInfo, ProfileInfoProps } from '@/components/header/profile-info'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropDownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/drop-down'
import { Typography } from '@/components/ui/typography'

import styles from './header.module.scss'

type HeaderProps = {
  isAuth: boolean
  user: ProfileInfoProps | null
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className={styles.trigger} variant={'link'}>
                  <Avatar />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropDownMenuItem>
                  <ProfileInfo
                    avatar={user?.avatar || ''}
                    email={user?.email || 'j&johnson@gmail.com'}
                    name={user?.name || 'Ivan'}
                  />
                </DropDownMenuItem>
                <DropdownMenuSeparator />
                <DropDownMenuItem>
                  <Profile /> My Profile
                </DropDownMenuItem>
                <DropdownMenuSeparator />
                <DropDownMenuItem>
                  <Logout /> Sign Out
                </DropDownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  )
}
