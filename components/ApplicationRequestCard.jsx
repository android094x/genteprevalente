import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import {
  approveRequest,
  rejectRequest,
} from '../redux/actions/requestsAction.js';
import AttachedFilesModal from './AttachedFilesModal.jsx';
import Modal from './Modal.jsx';

const ApplicationRequestCard = ({
  item,
  currentRequest,
  setCurrentRequest,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(item);
  const [clickedButton, setClickedButton] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (clickedButton === 'approve') {
      setData(prevData => ({
        ...prevData,
        status: 'APPROVED',
      }));
      dispatch(approveRequest(data), currentRequest);
      if (currentRequest !== 0) setCurrentRequest(currentRequest - 1);
    }
    if (clickedButton === 'reject') {
      setData(prevData => ({
        ...prevData,
        status: 'REJECTED',
      }));
      dispatch(rejectRequest(data), currentRequest);
      if (currentRequest !== 0) setCurrentRequest(currentRequest - 1);
    }
  };

  const toggleModal = e => {
    setShowModal(!showModal);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', duration: 1.5 }}
      exit={{ scale: 0, opacity: 0, position: 'absolute' }}
      className='bg-white relative flex items-center justify-center flex-col rounded-xl p-4 w-4/5 pb-16 lg:pb-32 order-2 lg:order-1'>
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
        <button
          type='button'
          onClick={toggleModal}
          className='hidden bg-white p-2 w-64 font-bold rounded-xl shadow-md lg:flex lg:items-center justify-center hover:opacity-60 focus:outline-none'>
          <img
            src='/clip-icon.svg'
            alt='attached files icon'
            className='mr-2'
          />
          Ver archivos adjuntos
        </button>

        <div className='flex flex-col lg:hidden'>
          <h2 className='text-xl font-bold'>Documentos cargados</h2>
          {data.files.map(file => (
            <div
              key={file.file_name}
              className='flex justify-between items-center w-full space-x-4 space-y-4 space'>
              <a
                href={file.file_url}
                target='_blank'
                className='text-xl hover:opacity-60'>
                {file.file_name}
              </a>
              <a
                href={file.file_url}
                target='_blank'
                className='text-xs flex flex-col items-center hover:opacity-60'>
                <img src='/PDF-icon.svg' alt={file.file_name} className='w-8' />
                {`${file.file_name.substring(0, 7)}...`}
              </a>
            </div>
          ))}
        </div>

        <button
          type='submit'
          onClick={() => setClickedButton('approve')}
          className='lg:absolute lg:top-4 lg:right-6 xl:right-20 flex items-center justify-center shadow-md p-2 w-52 bg-white hover:opacity-60 font-bold rounded-xl focus:outline-none'>
          <img
            src='/approve-request-icon.svg'
            alt='approve icon'
            className='mr-2'
          />
          Aprobar Empresa
        </button>
        <button
          type='submit'
          onClick={() => setClickedButton('reject')}
          className='lg:absolute lg:top-20 lg:right-6 xl:right-20 flex items-center justify-center shadow-md p-2 w-52 bg-white hover:opacity-60 font-bold rounded-xl focus:outline-none'>
          <img
            src='/reject-request-icon.svg'
            alt='reject icon'
            className='mr-2'
          />
          Rechazar Empresa
        </button>
      </form>
      {showModal ? (
        <Modal>
          <AttachedFilesModal
            toggleModal={toggleModal}
            setShowModal={setShowModal}
            files={data.files}
          />
        </Modal>
      ) : null}
    </motion.div>
  );
};

export default ApplicationRequestCard;
