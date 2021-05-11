import { useRef } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

const AttachedFilesModal = ({ toggleModal, setShowModal, files }) => {
  const bgRef = useRef(null);
  return (
    <div
      className='w-full h-full fixed top-0 left-0 bg-ModalBG flex justify-center items-center z-10'
      ref={bgRef}
      onClick={e => (bgRef.current === e.target ? setShowModal(false) : null)}>
      <div className='bg-white rounded-xl p-8 shadow-lg flex flex-col items-center max-w-lg relative'>
        <IoCloseCircle
          className='absolute top-4 right-4 text-2xl hover:opacity-60 cursor-pointer'
          onClick={toggleModal}
        />
        <h2 className='text-xl font-bold'>Documentos Adjuntos</h2>
        {files.map(file => (
          <div className='flex justify-between items-center w-full space-x-4 space-y-4 space'>
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
    </div>
  );
};

export default AttachedFilesModal;
