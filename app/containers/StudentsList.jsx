'use strict';

import React from 'react'; // , { Component }
import { connect } from 'react-redux';
import { showAllStudents, deleteStudent, createNewStudent } from '../reducers';
import { combineReducers } from '../reducers';
import Students from '../components/StudentsList';
// import Root from '../components/Root';

const mapStateToProps = state => { return { students: state.students } };

const mapDispatchToProps = (dispatch, ownProps) => ({
  showAllStudents() { dispatch(showAllStudents); },
  deleteStudent(studentId) { dispatch(deleteStudent(studentId)); }
});

// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Students);
