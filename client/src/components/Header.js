import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to='/'>
            <li className="nav-li">Home</li>
          </Link>

          <Link to='/api/auth/register'>
            <li className="nav-li">Register</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
