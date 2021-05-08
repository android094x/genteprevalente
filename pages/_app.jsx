import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <main className='bg-GrayGDM border-box overflow-x-hidden'>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
