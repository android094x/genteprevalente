import Head from 'next/head';
import ApplicationRequestCard from '../../components/ApplicationRequestCard';
import Applicationrequests from '../../components/ApplicationRequests';

export default function Home() {
  return (
    <>
      <Head>
        <title>Solicitud de aprovación de empresas | Gente PreValente</title>
        <meta
          name='description'
          content='Gente PreValente - Prevalentware Prueba tecnica.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen-4rem'>
        <h3>Something goes here</h3>
        <div className='px-4 py-16 lg:my-0 container mx-auto'>
          <ApplicationRequestCard />
          <Applicationrequests />
        </div>
        <h3>Another thing goes here</h3>
      </div>
    </>
  );
}
