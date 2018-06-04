import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blogs extends Component {
  render() {
    return (
      <div className="blog-post">
        <br />
        <h2>Blog List</h2>

        {this.props.blogs.map(blog => (
          <div key={blog.id} className="">
            <Link to={`blogs/${blog.id}`}>
              <div key={blog.id} className="post">
                <p>{blog.title}</p>
                <img src={blog.img_url} alt='no pic' className="post-img"/>
          <div className="desc">
            <p>{blog.text}</p>
          </div>
              </div>
            </Link>
          </div>
          ))}
      </div>
    )
  }
}
