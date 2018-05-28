import React, { Component } from 'react';
import BlogForm from './BlogForm';
// EventForm.js holds the blog form.

export default class EditBlog extends Component {
  render() {
    return(
      <div>
        <h1>Edit Blog # {this.props.blog.id}</h1>
        <BlogForm

        />
      </div>
    )
  }
}
