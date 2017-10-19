

import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
// import auth from './auth';

export default combineReducers({
  campuses,
  students
  // auth
});
