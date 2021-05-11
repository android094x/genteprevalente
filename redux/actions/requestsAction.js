import { INIT, APPROVE_REQUEST, REJECT_REQUEST } from '../actionTypes';
import fakeDataFromDB from '../../fakeDataFromDB';

export const initializer = () => {
  try {
    const data = fakeDataFromDB();
    const withPendingStatus = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'PENDING') withPendingStatus.push(data[i]);
    }

    return { type: INIT, payload: withPendingStatus };
  } catch (error) {
    console.log("Data couldn't be 'Fetched'", error);
  }
};

export const approveRequest = (approvedRequest, approvedRequestIdx) => ({
  type: APPROVE_REQUEST,
  payload: { approvedRequest, approvedRequestIdx },
});

export const rejectRequest = (rejectedRequest, rejectedRequestIdx) => ({
  type: REJECT_REQUEST,
  payload: { rejectedRequest, rejectedRequestIdx },
});
