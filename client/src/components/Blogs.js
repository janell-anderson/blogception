import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blogs extends Component {

  render() {
    console.log("Hi I am a Blog post");
    return (
      <div className="blog-post">
        <br />
        <h2>Blog List</h2>
        {console.log("I am the second console log")}
        {this.props.blogs.map(blog => (
          <div key={blog.id} className="">
            <Link to={`blogs/${blog.id}`}>
              <div key={blog.id} className="post">
                <h3>{blog.title}</h3>
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
