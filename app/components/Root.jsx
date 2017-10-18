'use strict';

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Students from './Students';
import Campuses from './Campuses';

export default class WinterJokes extends Component {
  // constructor() {
  //   super();
  // }

  // componentDidMount() {
  // }

  // thing1() {
  //   this.setState({
  //   });
  // }

  // thing2() {
  //   this.setState({

    // });
  // }

  render() {
    return (
      <div>
      <h1>is this working</h1>
        <NavBar />
        <Router>
          <Route path='/students' component={Students} />
          <Route path='/new-student' component={NewStudent} />
          <Route path='/campuses' component={Campuses} />
          <Route path='/new-campus' component={NewCampus} />
        </Router>
        <Footer />
      </div>
    );
  }
}
