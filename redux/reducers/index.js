import { combineReducers } from 'redux';

import requestsReducers from './requestsReducer';

const rootReducer = combineReducers({
  requestsReducers,
});

export default rootReducer;
