import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';

export default class CreateBlog extends Component {
  render() {
      const loggedIn = this.props.user;
      const logConfirm = loggedIn ? (

        <BlogForm
          id='create'
          func={this.props.onSubmit}
          user={this.props.user} />
      ) : (<Link to='/api/auth/login'><h1>Please log in!</h1></Link>);
      // if the user is logged in, the form shows up when when clicking on "new" to create an event. otherwise, it asks the user to log in

    return(
      <div>
        {logConfirm}
      </div>
      )
  }
}
