import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditStudent from './EditStudent';
import { NavLink } from 'react-router-dom';

class StudentDetail extends Component {

  render() {

    const student = this.props.student;
    const campuses = this.props.campuses;
    if (!student || !campuses) return null;
    const campusId = +student.campusId;
    const campus = campuses.find((camp) => camp.id === campusId);
    if (!campus) return null;
    return (
      <div>
        <h1>{student && student.name}</h1>
        <br />  <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
            </tr>
          </thead>
          <br />
          <tbody>
            <tr key={student.id}>
              <th>{student.id}</th>
              <th>{student.name}</th>
              <th>{student.email}</th>
              <th><NavLink className="campusLink" to={`/campuses/${campus.id}`}>{campus && campus.name}</NavLink></th>
            </tr>
          </tbody>
        </table>
        <br />  <br />
        <EditStudent id={student.id} history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  const student = state.students.find((ele) => {
    return ele.id === paramId;
  });
  return {
    student,
    campuses: state.campuses
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetail);
