'use strict';

import { combineReducers } from 'redux';
import campuses from './campusReducer';
import students from './studentReducer';
import auth from './auth';

const initialState = {};

export default combineReducers({
  campuses,
  students,
  auth
});

export * from './campusReducer';
export * from './studentReducer';
