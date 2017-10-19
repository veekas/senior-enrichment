'use strict';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import StudentsList from '../containers/StudentsList';
import Campuses from './Campuses';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import Dashboard from './Dashboard';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';

export default class Root extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='main'>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/students' component={StudentsList} />
            <Route exact path='/students/new' component={NewStudent} />
            <Route       path='/students/:studentId' component={SingleStudent} />
            <Route exact path='/campuses' component={Campuses} />
            <Route exact path='/campuses/new' component={NewCampus} />
            <Route       path='/campuses/:campusId' component={SingleCampus} />
            <Redirect to='/dashboard' />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
