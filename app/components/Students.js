import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';


class Students extends Component {

  render() {
    let students = this.props.students;
    // Sort array so they display in correct order based off student id
    students = students.sort((a, b) => a.id > b.id);

    return (
      <div>
        <h3> Students </h3>
        <br />  <br />
        <div id="students">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Campus</th>
                <th>Delete</th>
              </tr>
            </thead>
            <br />
            <tbody>
              {
                students.map((student) => (
                  <StudentItem key={student.id} className="student-item" student={student} />
                ))
              }
            </tbody>
          </table>
        </div>
        <br />  <br />
        <NavLink to="/add-students">
          <button id="plus">Add Student</button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { students: state.students };
};

const mapDispatch = null;


export default connect(mapStateToProps, mapDispatch)(Students);
