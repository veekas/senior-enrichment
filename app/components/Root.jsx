'use strict';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
// import Footer from './Footer';
import Students from './Students';
import Campuses from './Campuses';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import Home from './Home';

export default class Root extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='main'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/new-student' component={NewStudent} />
            <Route exact path='/campuses' component={Campuses} />
            <Route exact path='/new-campus' component={NewCampus} />
            <Redirect to='/home' />
          </Switch>
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}
