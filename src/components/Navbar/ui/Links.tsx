import { cn } from '@/lib/utils';
import { NavButton } from './Button';
import { NavLink } from './Link';
import { useAuthContext } from '@/context/AuthContext';
import { ReactNode } from 'react';
import { ModeToggle } from '@/components/ThemeToggle';

interface Props {
  direction?: 'row' | 'col';
  className?: ReactNode;
}

const Links = ({ direction = 'row', className }: Props) => {
  const { user, logout } = useAuthContext();
  const dir = {
    row: 'flex-row items-center',
    col: 'flex-col justify-center',
  };

  if (user.isAuthenticated) {
    return (
      <div className={cn('flex', dir[direction], className)}>
        <NavLink href="/main" currentPath="/">
          <NavButton text="Main" dataTestId="nav-main-btn" />
        </NavLink>

        <NavLink href="/" currentPath="/">
          <NavButton
            text="Sign out"
            dataTestId="nav-signout-btn"
            onClick={logout}
          />
        </NavLink>

        <ModeToggle />
      </div>
    );
  }

  return (
    <div className={cn('flex', dir[direction], className)}>
      <NavLink href="/login" currentPath="/login">
        <NavButton text="Sign In" dataTestId="nav-signin-btn" />
      </NavLink>

      <NavLink href="/login?signup=1" currentPath="/login">
        <NavButton text="Sign Up" dataTestId="nav-signup-btn" />
      </NavLink>

      <ModeToggle />
    </div>
  );
};

export { Links };