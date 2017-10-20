import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the home page.</h1>
        <h3>It will soon be a dashboard to see important info in the app.</h3>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Home);
