import React, { Component } from 'react';
import BlogForm from './BlogForm';
// BlogForm.js holds the blog form.

export default class EditBlog extends Component {
  render() {
    console.log(this.props.blog.id);
    return(
      <div>
        <h1>EditBlog # {this.props.blog.id}</h1>
        <BlogForm
          blog={this.props.blog}
          id='edit'
          func={this.props.onSubmit}
        />
      </div>
    )
  }
}

// {this.props.blog.id}
