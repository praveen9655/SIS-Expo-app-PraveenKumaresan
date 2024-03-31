// rootReducer.js

import { combineReducers } from 'redux';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
  admin: adminReducer
  // Add other reducers as needed
});

export default rootReducer;
