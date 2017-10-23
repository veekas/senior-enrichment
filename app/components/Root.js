import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

import Campus from './Campus';
import AddCampus from './AddCampus';
import SingleCampus from './SingleCampus';

import Students from './Students';
import AddStudent from './AddStudent';
import StudentDetail from './StudentDetail';

import { fetchStudents } from '../reducers/student';
import { fetchCampuses } from '../reducers/campus';

export const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

class Root extends Component {

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />
          <br />  <br />
          <div id="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/students/:id" component={StudentDetail} />
              <Route path="/campuses/:id" component={SingleCampus} />
              <Route path="/campuses" component={Campus} />
              <Route path="/students" component={Students} />
              <Route path="/add-students" component={AddStudent} />
              <Route path="/add-campus" component={AddCampus} />
              <Route component={Home} />
            </Switch>
          </div>
          <br />  <br />  <br />  <br />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = null;

const mapDispatch = (dispatch) => {
  return {
    fetchInitialData: function () {
      dispatch(fetchStudents());
      dispatch(fetchCampuses());
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(Root);
