import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

interface AuthContextProps {
  user: {
    email?: string;
    isAuthenticated: boolean;
  };
  login: (creds: { email: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: {
    isAuthenticated: false,
  },
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider: FC<PropsWithChildren> = function ({
  children,
}) {
  const [user, setUser] = useState<AuthContextProps['user']>({
    isAuthenticated: false,
  });

  const router = useRouter();

  return (
    <AuthContext.Provider
      value={{
        user,
        login({ email, password }: { email: string; password: string }) {
          // TODO: add firebase login with password
          setUser({ isAuthenticated: true, email });
          router.push('/main');
        },
        logout() {
          // TODO: add firebase login with password

          setUser({ isAuthenticated: false, email: undefined });
          router.push('/');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): AuthContextProps {
  const context = useContext(AuthContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'useAuthContext should be used within the AuthContext provider!'
    );
  }

  return context;
}
