import React, { Component } from 'react';
import BlogForm from './BlogForm';
// BlogForm.js holds the blog form.

export default class EditBlog extends Component {
  render() {
    // console.log('blog');
    return(
      <div>
        <h1>Edit Blog</h1>
        <BlogForm
          blog={this.props.blog}
          id='edit'
          func={this.props.onSubmit}
          user={this.props.user}
        />
      </div>
    )
  }
}

// {this.props.blog.id}
