

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UpdateStudent from './UpdateStudent';

class SingleStudent extends Component {

  render() {

    const student = this.props.student;
    const campuses = this.props.campuses;
    console.log(this.props.student)
    if (!student || !campuses) return null;
    const campusId = +student.campusId;
    const campus = campuses.find((campus) => campus.id === campusId);
    if (!campus) return null;

    return (
      <div>
        <h1>{student && student.name}</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody>
            <tr key={student.id}>
              <th>{student.id}</th>
              <th>{student.name}</th>
              <th>{student.email}</th>
              <th>
                <NavLink to={`/campuses/${campus.id}`}>
                  {campus && campus.name}
                </NavLink>
              </th>
            </tr>
          </tbody>
        </table>
        <EditStudent id={student.id} history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const paramId = +ownProps.match.params.id;
  const student = state.students.find((student) => student.id === paramId);
  return {
    student,
    campuses: state.campuses
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
