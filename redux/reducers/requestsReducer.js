import { INIT, APPROVE_REQUEST, REJECT_REQUEST } from '../actionTypes';

const initialState = [];

const requestsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case INIT:
      newState = action.payload;
      return [...newState];
    case APPROVE_REQUEST:
      const approvedRequestIdx = action.payload.approvedRequestIdx;
      newState = [...state];
      newState.splice(approvedRequestIdx, 1);
      console.log(
        'APPROVED, send this to the database or something',
        action.payload.approvedRequest
      );
      return [...newState];
    case REJECT_REQUEST:
      const rejectedRequestIdx = action.payload.rejectedRequestIdx;
      newState = [...state];
      newState.splice(rejectedRequestIdx, 1);
      console.log(
        'REJECTED, send this to the database or something',
        action.payload.rejectedRequest
      );
      return [...newState];
    default:
      return state;
  }
};

export default requestsReducer;
