'use strict';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import NavBar from './NavBar';
import Footer from './Footer';
import StudentsList from '../containers/StudentsList';
import CampusList from './CampusList';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import Home from './Home';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';

import { showAllStudents } from '../reducers/studentReducer';
// import { showAllCampuses } from '../reducers/campusReducer';

export default class Root extends Component {
  // componentDidMount() {
  //   this.props.showAllStudents();
  //   // this.props.showAllCampuses();
  // }

  render() {
    return (
      <div>
        <NavBar />
        <div className='main'>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/students' component={StudentsList} />
            <Route exact path='/students/new' component={NewStudent} />
            <Route       path='/students/:studentId' component={SingleStudent} />
            <Route exact path='/campuses' component={CampusList} />
            <Route exact path='/campuses/new' component={NewCampus} />
            <Route       path='/campuses/:campusId' component={SingleCampus} />
            <Redirect to='/home' />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

// const mapDispatch = {
//   showAllStudents,
//   // showAllCampuses
// };

// export default withRouter(connect(null, mapDispatch)(Root));
