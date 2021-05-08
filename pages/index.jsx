import Head from 'next/head';

import Card from '../components/Card';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Gente PreValente</title>
        <meta
          name='description'
          content='Gente PreValente - Prevalentware Prueba tecnica.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen-4rem lg:h-screen-4rem container mx-auto grid grid-cols-1 lg:justify-items-center p-16 sm:px-24 lg:grid-rows-2 lg:grid-cols-2 space-y-16 lg:space-y-0 items-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
