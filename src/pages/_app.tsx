import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/scss/bootstrap.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '~/components/home/home.scss';
import '~/styles/reset.css';
import '~/styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
