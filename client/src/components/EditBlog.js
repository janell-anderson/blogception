import React, { Component } from 'react';
import BlogForm from './BlogForm';
// BlogForm.js holds the blog form.

export default class EditBlog extends Component {
  render() {
    return(
      <div>
        <h1>EditBlog</h1>
        <BlogForm
          blog={this.props.blog}
          id='edit'
          func={this.props.onSubmit}
        />
      </div>
    )
  }
}
