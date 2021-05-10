import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializer } from '../redux/actions/requestsAction';

const ApplicationRequests = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  useEffect(() => {
    dispatch(initializer());
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>App request</h1>
    </div>
  );
};

export default ApplicationRequests;
