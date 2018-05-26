import React, { Component } from 'react';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      img_url: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Blog Post Form</h2>
          <form onSubmit=>
            <label htmlFor="title">Title</label>
            <div>
              <input type = "text"
                      name = "title"
                      id = "title" />
            </div>
          </form>
      </div>
    )
  }
}


