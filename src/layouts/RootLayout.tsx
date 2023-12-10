import type { FC, PropsWithChildren } from 'react';
import { Flowbite } from 'flowbite-react';
import { NavbarComponent } from '@/components/Navbar';
import { FooterComponent } from '@/components/Footer';
import { flowbiteTheme } from './theme';

export const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <NavbarComponent />
      <main
        id="main-content"
        className="h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900"
      >
        {children}
      </main>
      <FooterComponent />
    </Flowbite>
  );
};
