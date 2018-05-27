import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';

export default class CreateBlog extends Component {
  render() {
    return(
      <BlogForm
        id="create"
        func={this.props.onSubmit}
      />
    )
  }
}
