'use strict';

import React from 'react'; // , { Component }
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteStudent } from '../reducers/studentReducer';
import { combineReducers } from '../reducers';
import StudentItem from '../components/StudentItem';

const mapStateToProps = null;
  // state => { return { students: state.students } };

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteStudent(studentId) { dispatch(deleteStudent(studentId)); }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Students));
