import Head from 'next/head';
import Link from 'next/link';

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

      <div className='min-h-screen-4rem flex flex-col items-center justify-center'>
        <div className='self-start flex text-lg pt-8 pl-8'>
          <h3 className='text-blue-500 hover:text-blue-400'>
            <Link href='/'>
              <a>Administración</a>
            </Link>
          </h3>
          <span className='mx-2'>/</span>
          <h3>Aprobación de Empresas</h3>
        </div>
        <Applicationrequests />
      </div>
    </>
  );
}
