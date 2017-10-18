'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <NavLink to='/' activeClassName='active'>
        <button>
          Home
        </button>
      </NavLink>
      <NavLink to='/campuses' activeClassName='active'>
        <button>
          Campuses
        </button>
      </NavLink>
      <NavLink to='/students' activeClassName='active'>
        <button>
          Students
        </button>
      </NavLink>
    </div>
  );
}
