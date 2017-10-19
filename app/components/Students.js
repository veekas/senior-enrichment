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
        <NavLink to="/add-students">
          <button className="btn btn-default" id="plus">Add Student +</button>
        </NavLink>
        <div id="students">
          <table className="table">
            <thead>
              <tr>
                <th className="th"> ID</th>
                <th className="th">Name</th>
                <th className="th">Email</th>
                <th className="th">Campus</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student) => (
                  <StudentItem key={student.id} className="student-item" student={student} />
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


export default connect(mapStateToProps, mapDispatch)(Students);
