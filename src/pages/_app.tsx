// LIBS
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

// COMPONENTS
import Header from '../components/Header';

// STORE
import { store } from '../store/store';

// STYLES
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
