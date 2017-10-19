import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewStudent } from '../reducers/student';

class AddStudent extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const campusId = Number(event.target.campus.value);

    const newStudent = {
      name,
      campusId,
      email
    };
    this.props.addStudent(newStudent);
    this.props.history.push('/students');

  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h3>Add Student</h3>
        <form id="form" onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="inputName" required></input>
          </div>
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" type="email" id="exampleInputEmail1" required></input>
          </div>
          <div>
            <label htmlFor="exampleSelect1">Campus</label>
            <select name="campus" id="exampleSelect1" required>
              {
                campuses.map((campus) => {
                  return (<option key={`${campus.id}`} value={`${campus.id}`}>{`${campus.name}`}</option>);
                })
              }
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { campuses: state.campuses };
};

const mapDispatch = (dispatch) => {
  return {
    addStudent: function (student) {
      dispatch(addNewStudent(student));
    }
  };
};

export default connect(mapStateToProps, mapDispatch)(AddStudent);
