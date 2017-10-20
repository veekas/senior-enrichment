import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <span />
        <NavLink to="/students">Students</NavLink>
        <span />
        <NavLink to="/campuses">Campuses</NavLink>
      </div>
    );
  }
}

