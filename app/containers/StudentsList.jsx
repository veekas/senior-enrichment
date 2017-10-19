'use strict';

import React from 'react'; // , { Component }
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showAllStudents, createNewStudent } from '../reducers/studentReducer';
import { combineReducers } from '../reducers';
import Students from '../components/StudentsList';

const mapStateToProps = state => { return { students: state.students } };

const mapDispatchToProps = (dispatch, ownProps) => ({
  showAllStudents() { dispatch(showAllStudents()); },
  // deleteStudent(studentId) { dispatch(deleteStudent(studentId)); }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Students));
