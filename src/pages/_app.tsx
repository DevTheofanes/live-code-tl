import { GlobalProvider } from '@/context';
import type { AppProps } from 'next/app';
import { Container } from './styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </Container>
  );
}
