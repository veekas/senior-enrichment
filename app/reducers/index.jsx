'use strict';

import { combineReducers } from 'redux';
import campusReducers from './campusReducers';
import studentReducers from './studentReducers';
import auth from './auth';

const initialState = {};

export const rootReducer = {
  campusReducers,
  studentReducers
};

/*
switch (action.type) {
    default:
      return state;
    }
      */
