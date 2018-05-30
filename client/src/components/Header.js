import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    const loggedIn = this.props.user;
    const logConfirm = loggedIn ? "Logout" : "Login"
    return (
      <nav>
        <ul>
          <Link to='/'>
            <li className="nav-li">Home</li>
          </Link>

          <Link to='/api/blogs'>
            <li className='nav-li'>Blogs</li>
          </Link>

          <Link to='/api/blogs/new'>
            <li className='nav-li'>Create Blog</li>
          </Link>

          <Link to='/api/auth/register'>
            <li className="nav-li">Register</li>
          </Link>

          <Link to='/api/auth/login'>
            <li className="nav-li">{logConfirm}</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
