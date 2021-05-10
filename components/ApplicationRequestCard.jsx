import { useState } from 'react';

const ApplicationRequestCard = ({
  id,
  company_name,
  business_name,
  company_logo_url,
  id_type,
  employess,
  files,
}) => {
  const [clickedButton, setClickedButton] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (clickedButton === 'approve') console.log('Approved');
    if (clickedButton === 'reject') console.log('Rejected');
  };

  return (
    <div className='bg-white relative flex items-center flex-col rounded-xl p-4'>
      <figure>
        <img src='/company_logo.png' alt='' />
      </figure>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 justify-items-center items-center lg:grid-cols-2 lg:gap-y-16 gap-y-8 lg:gap-x-8 w-4/5 lg:w-6/12 mt-6'>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Nombre de la Empresa</p>
          <input
            type='text'
            defaultValue='Default Value'
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Razon Social</p>
          <input
            type='text'
            defaultValue='Default Value'
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Tipo de identificacion</p>
          <input
            type='text'
            defaultValue='Default Value'
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Identificacion</p>
          <input
            type='text'
            defaultValue='Default Value'
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'># de empleados</p>
          <input
            type='text'
            defaultValue='Default Value'
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <div>Adjuntos</div>
        <button
          onClick={() => setClickedButton('approve')}
          className='lg:absolute lg:top-4 lg:right-20 shadow-md p-4 w-48 font-bold rounded-xl focus:outline-none'>
          Aprobar Empresa
        </button>
        <button
          onClick={() => setClickedButton('reject')}
          className='lg:absolute lg:top-24 lg:right-20 shadow-md p-4 w-48 font-bold rounded-xl focus:outline-none'>
          Rechazar Empresa
        </button>
        {/* <button
          onClick={() => setClickedButton('approve')}
          className='absolute -bottom-16 lg:hidden shadow-md p-4 w-48 font-bold rounded-xl'>
          Aprobar Empresa
        </button>
        <button
          onClick={() => setClickedButton('reject')}
          className='absolute -bottom-32 lg:hidden shadow-md p-4 w-48 font-bold rounded-xl'>
          Rechazar Empresa
        </button> */}
      </form>
    </div>
  );
};

export default ApplicationRequestCard;
