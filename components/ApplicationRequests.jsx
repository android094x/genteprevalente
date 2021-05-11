import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializer } from '../redux/actions/requestsAction';

import ApplicationRequestCard from './ApplicationRequestCard';

import { IoArrowForwardCircle, IoArrowBackCircle } from 'react-icons/io5';

const ApplicationRequests = () => {
  const [currentRequest, setCurrentRequest] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector(state => state);

  useEffect(() => {
    if (!!items) dispatch(initializer());
  }, []);

  return (
    <div className='px-4 py-8 lg:my-0 container mx-auto flex flex-col items-center'>
      {items.length !== 0 ? (
        items
          .slice(currentRequest, currentRequest + 1)
          .map(item => (
            <ApplicationRequestCard
              key={item.id}
              item={item}
              currentRequest={currentRequest}
              setCurrentRequest={setCurrentRequest}
            />
          ))
      ) : (
        <h2 className='text-4xl'>No existen solicitudes pendientes</h2>
      )}
      {items.length > 0 && (
        <div className='flex items-center my-4 order-1 lg:order-2'>
          <button
            className='focus:outline-none disabled:opacity-50'
            disabled={currentRequest === 0 ? true : false}
            onClick={() => setCurrentRequest(currentRequest - 1)}>
            <IoArrowBackCircle className='text-3xl mr-2' />
          </button>
          <p>
            Empresa {currentRequest + 1} de {items.length} pendientes por
            aprobacion
          </p>
          <button
            className='focus:outline-none disabled:opacity-50'
            disabled={currentRequest === items.length - 1 ? true : false}
            onClick={() => setCurrentRequest(currentRequest + 1)}>
            <IoArrowForwardCircle className='text-3xl ml-2' />
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplicationRequests;
