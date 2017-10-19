

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';

class StudentsList extends Component {

  render() {
    return (
      <div>
        <h3> All Students </h3>
        <NavLink to="/students/new">
          <button>Add Student</button>
        </NavLink>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Campus</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.students.map((student) => (
                  <StudentItem key={student.id} student={student} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { students: state.students };
};

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(StudentsList);
