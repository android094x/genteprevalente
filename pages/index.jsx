import Head from 'next/head';

import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gente PreValente</title>
        <meta
          name='description'
          content='Gente PreValente - Prevalentware Prueba tecnica.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen-4rem grid grid-cols-1 space-y-16 px-4 py-16 justify-items-center lg:my-0 lg:items-center lg:grid-cols-2 lg:gap-16 lg:space-y-0 xl:container xl:mx-auto'>
        <Card
          url='/business-creation-requests'
          title='Solicitudes de creación de empresas'
          icon='/Home-icon-1.svg'
          text='2 solicitudes sin tratar'
        />
        <Card
          url='/'
          title='Indicadores'
          icon='/Home-icon-2.svg'
          text='Visitado por última vez: 31/01/2020'
        />
        <Card
          url='/'
          title='Inscripción de empleados en empresas'
          icon='/Home-icon-3.svg'
          text='3 usuarios sin empresa registrada'
        />
        <Card
          url='/'
          title='Gestión de usuarios'
          icon='/Home-icon-4.svg'
          text='532 usuarios activos en la plataforma'
        />
      </div>
    </>
  );
}
