import { Inter } from 'next/font/google';

import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { theme } from '@/styles/theme';
import '@/styles/globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        {(Component as any).auth ? (
          <Auth>
            <main className={inter.className}>
              <Component {...pageProps} />
            </main>
          </Auth>
        ) : (
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        )}
      </ThemeProvider>
    </SessionProvider>
  );
}

function Auth({ children }: { children: React.ReactNode }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}
