import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import Header from '../components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <main className='bg-GrayGDM border-box overflow-x-hidden'>
      <Header />
      <Provider store={store}>
        <div className='mt-16'>
          <Component {...pageProps} />
        </div>
      </Provider>
    </main>
  );
}

export default MyApp;
