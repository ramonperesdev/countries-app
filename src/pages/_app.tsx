import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import { Container, Header, TitleHeader } from '../styles/pages/app';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <TitleHeader>Where in the world ?</TitleHeader>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
