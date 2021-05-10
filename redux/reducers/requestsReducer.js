import { INIT, APPROVE_REQUEST, REJECT_REQUEST } from '../actionTypes';

const initialState = [];

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      const initialState = action.payload;
      console.log([...initialState]);
      return [...initialState];
    case APPROVE_REQUEST:
      console.log('APPROVED');
      return state;
    case REJECT_REQUEST:
      console.log('REJECTED');
      return state;
    default:
      return state;
  }
};

export default requestsReducer;
