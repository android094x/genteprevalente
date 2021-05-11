import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  approveRequest,
  rejectRequest,
} from '../redux/actions/requestsAction.js';

const ApplicationRequestCard = ({ item, currentRequest }) => {
  const [data, setData] = useState(item);
  const [clickedButton, setClickedButton] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (clickedButton === 'approve') {
      const approvedApplication = { ...data, status: 'APPROVED' };
      dispatch(approveRequest(approvedApplication));
    }
    if (clickedButton === 'reject') {
      const rejectedApplication = { ...data, status: 'REJECTED' };
      dispatch(rejectRequest(rejectedApplication));
    }
  };

  return (
    <div className='bg-white relative flex items-center justify-center flex-col rounded-xl pt-4 w-4/5 pb-16 lg:pb-32 order-2 lg:order-1'>
      <figure>
        <img src={data.company_logo_url} alt='' />
      </figure>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 justify-items-center items-center lg:grid-cols-2 lg:gap-y-16 gap-y-8 lg:gap-x-8 w-4/5 lg:w-6/12 mt-6'>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Nombre de la Empresa</p>
          <input
            type='text'
            defaultValue={data.company_name}
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Razon Social</p>
          <input
            type='text'
            defaultValue={data.business_name}
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Tipo de identificacion</p>
          <input
            type='text'
            defaultValue={data.id_type}
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'>Identificacion</p>
          <input
            type='text'
            defaultValue={data.id}
            className='border-b-2 border-GrayNavBarGDM font-bold uppercase w-full focus:outline-none p-1'
          />
        </label>
        <label htmlFor=''>
          <p className='text-xs text-gray-500'># de empleados</p>
          <input
            type='text'
            defaultValue={data.employees}
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
      </form>
    </div>
  );
};

export default ApplicationRequestCard;
