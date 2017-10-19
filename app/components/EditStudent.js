import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudentInfo } from '../reducers/student';

class EditStudent extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const campusId = Number(event.target.campus.value);
    const newStudentInfo = { campusId, id: this.props.id };

    if (name) newStudentInfo.name = name;
    if (email) newStudentInfo.email = email;

    console.log('Info', newStudentInfo);
    this.props.updateStudent(newStudentInfo);
    this.props.history.push('/students');

  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h3 className="formHeader">Edit Student</h3>
        <h4>Update information below:</h4>
        <form id="form" onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="inputName"></input>
          </div>
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" type="email" id="exampleInputEmail1"></input>
          </div>
          <div>
            <label htmlFor="exampleSelect1">Campus</label>
            <select name="campus" id="exampleSelect1">
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
    updateStudent: function (newInfo) {
      dispatch(updateStudentInfo(newInfo));
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(EditStudent);
