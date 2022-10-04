import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import { store } from '../store/store';
import { globalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default MyApp;
