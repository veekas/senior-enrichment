'use strict';

import React from 'react'; // , { Component }
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { combineReducers } from '../reducers';
import StudentItem from '../components/StudentItem';
import { deleteStudent } from '../reducers/studentReducer';

const mapStateToProps = state => { return { students: state.students } };

const mapDispatchToProps = { deleteStudent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentItem));
