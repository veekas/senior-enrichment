import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent } from '../reducers/student';


class StudentItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeStudentCallBack = this.removeStudentCallBack.bind(this);
  }

  removeStudentCallBack(event) {
    const { deleteStudent, student } = this.props;
    event.stopPropagation();
    deleteStudent(student.id);
  }

  render() {
    const student = this.props.student;
    const campuses = this.props.campuses;
    if (!student || !campuses) return null;
    const campusId = +student.campusId;
    const campus = campuses.find((camp) => camp.id === campusId);

    return (
      <tr key={student.id}>
        <th>
          <NavLink to={`/students/${student.id}`}>
            {student.id}
          </NavLink>
        </th>
        <th>{student.name}</th>
        <th>{student.email}</th>
        <th>{campus && campus.name}</th>
        <th>
          <button onClick={this.removeStudentCallBack}>X</button>
        </th>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return { campuses: state.campuses };
};

const mapDispatchToProps = { deleteStudent };

export default connect(mapStateToProps, mapDispatchToProps)(StudentItem);
