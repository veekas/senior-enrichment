import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCampus } from '../reducers/campus';

class AddCampus extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const imageURL = event.target.imgURL.value;

    const newCampus = {
      name,
      imageURL
    };
    this.props.addCampus(newCampus);
    this.props.history.push('/campuses');
  }

  render() {

    return (
      <div>
        <h3>Add Campus</h3>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="text"></input>
          </div>
          <div>
            <label htmlFor="exampleInputEmail1">Image URL</label>
            <input name="imgURL" type="text"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatch = (dispatch) => {
  return {
    addCampus: function (campus) {
      dispatch(addNewCampus(campus));
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(AddCampus);
