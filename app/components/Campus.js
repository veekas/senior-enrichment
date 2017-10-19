import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Campuses extends Component {

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h3>Campuses
        <NavLink to="/add-campus">
            <button id="campusBtn">Add Campus</button>
          </NavLink>
        </h3>
        <div id="campuses">
          {
            campuses.map((campus) => {
              return (
                <NavLink key={campus.id} to={`/campuses/${campus.id}`}>
                  <div key={campus.id}>
                    <h3 >{campus.name}</h3>
                    <img src={campus.imageURL}></img>
                  </div>
                </NavLink>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { campuses: state.campuses };
};

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Campuses);
