import { INIT, APPROVE_REQUEST, REJECT_REQUEST } from '../actionTypes';
import fakeDataFromDB from '../../fakeDataFromDB';

export const initializer = () => {
  try {
    const data = fakeDataFromDB();
    return {
      type: INIT,
      payload: data,
    };
  } catch (error) {
    console.log("Data couldn't be 'Fetched'");
  }
};

export const approveRquest = approvedRequest => ({
  type: APPROVE_REQUEST,
  payload: approvedRequest,
});

export const rejectRequest = rejectedRequest => ({
  type: REJECT_REQUEST,
  payload: rejectedRequest,
});
