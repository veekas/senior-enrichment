import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudentProfile } from '../reducers/students';

class UpdateStudent extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const campusId = +event.target.campus.value;
    const student = { campusId, id: this.props.id };

    // Only Add Optional Props that are valid
    if (name) student.name = name;
    if (email) student.email = email;
    if (major) student.major = major;

    console.log('Info', student);
    this.props.updateStudentProfile(student);
    this.props.history.push('/students');

  }

  render() {
    return (
      <div>
        <h3>Edit Student</h3>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="inputName" aria-describedby="emailHelp"></input>
          </div>
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" type="email" id="exampleInputEmail1"></input>
          </div>
          <div>
            <label htmlFor="major">Major</label>
            <input name="major" type="text" id="inputMajor"></input>
          </div>
          <div>
            <label htmlFor="exampleSelect1">Campus</label>
            <select name="campus" id="exampleSelect1">
              {
                this.props.campuses.map((campus) => {
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
    updateStudentProfile: function (newInfo) {
      dispatch(updateStudentProfile(newInfo));
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(UpdateStudent);
