import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampusInfo } from '../reducers/campus';

class EditCampus extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const imageURL = event.target.imgURL.value;
    const newCampusInfo = { id: this.props.campusId };

    if (name) newCampusInfo.name = name;
    if (imageURL) newCampusInfo.imageURL = imageURL;

    this.props.updateCampus(newCampusInfo);
    this.props.history.push('/campuses');

  }

  render() {
    return (
      <div>
        <h3>Edit Campus</h3>
        <form id="form" onSubmit={this.submitHandler}>
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
    updateCampus: function (newInfo) {
      dispatch(updateCampusInfo(newInfo));
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(EditCampus);
