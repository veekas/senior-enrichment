

import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';

import { showAllStudents } from '../reducers/students';
import StudentsList from './StudentsList';
import NewStudent from './NewStudent';
import SingleStudent from './SingleStudent';
import { showAllCampuses } from '../reducers/campuses';
import CampusList from './CampusList';
import NewCampus from './NewCampus';
import SingleCampus from './SingleCampus';


class Root extends Component {

  componentDidMount() {
    this.props.initializeData();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className='main'>
            <Switch>
              {/*<Route exact path="/" component={Login} /> */}
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
      </Router>
    );
  }
}

const mapStateToProps = null;

const mapDispatch = (dispatch) => {
  return {
    initializeData: function () {
      dispatch(showAllStudents());
      dispatch(showAllCampuses());
    }
  };
};

export default connect(mapStateToProps, mapDispatch)(Root);
