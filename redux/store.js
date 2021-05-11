import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from './reducers';

import { INIT, APPROVE_REQUEST, REJECT_REQUEST } from './actionTypes';

let store;

const initialState = [];

const reducer = (state = initialState, action) => {
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

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = preloadedState => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore([...store.getState(), ...preloadedState]);
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
