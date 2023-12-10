import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '@/context/AuthContext';
import { RootLayout } from '@/layouts';
import { ErrorBoundary } from '@/components/ErrorBoundary';

function App({ Component, ...props }: AppProps) {
  return (
    <AuthContextProvider>
      <RootLayout>
        <ErrorBoundary>
          <Component {...props} />
        </ErrorBoundary>
      </RootLayout>
    </AuthContextProvider>
  );
}
export default App;
