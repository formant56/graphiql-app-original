import type { FC } from 'react';
import { DarkThemeToggle, Navbar, Button } from 'flowbite-react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { useAuthContext } from '@/context/AuthContext';

export const NavbarComponent: FC<Record<string, never>> = function () {
  const router = useRouter();
  const { user, logout } = useAuthContext();

  return (
    <header className="sticky top-0 z-10">
      <Navbar fluid rounded>
        <Navbar.Brand href="/" data-testid="nav-brand">
          <Image alt="Logo" height="24" src="/favicon.png" width="24" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            GraphiQL Editor
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {user.isAuthenticated ? (
            <>
              <Navbar.Link
                data-testid="nav-main-btn"
                href="/main"
                active={router.pathname === '/'}
              >
                <Button>Main</Button>
              </Navbar.Link>
              <Button data-testid="nav-signout-btn" onClick={logout}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Navbar.Link href="/login" active={router.pathname === '/login'}>
                <Button data-testid="nav-signin-btn">Sign In</Button>
              </Navbar.Link>
              <Navbar.Link
                href="/login?signup=1"
                active={router.pathname === '/login'}
              >
                <Button data-testid="nav-signup-btn">Sign Up</Button>
              </Navbar.Link>
            </>
          )}
          <li>
            <DarkThemeToggle data-testid="nav-light-dark-theme" />
          </li>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
