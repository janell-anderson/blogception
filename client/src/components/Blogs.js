import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blogs extends Component {
  render() {
    return (
      <div className="">
        <br />
        <h2>Blog List</h2>

        {this.props.blogs.map(blog => (
          <div key={blog.id} className="">
            <Link to={`blogs/${blog.id}`}>
              <div key={blog.id} >
                {blog.id}
                <p>{blog.id}</p>
                <p>{blog.text}</p>
                <img src={blog.img_url} alt='no pic'/>
              </div>
            </Link>
          </div>
          ))}
      </div>
    )
  }
}
