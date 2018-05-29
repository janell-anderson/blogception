import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
      blog: Object.assign({
        title: '',
        text: '',
        img_url: '',
        // user_id: this.props.user.id
      }, props.blog)
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState, props) => ({
      blog: {
        ...prevState.blog,
        [name]: value
      }
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.func(this.state.blog);
    window.location.reload();
    this.setState({
      redirectHome: true
    });
  }

  render() {
    console.log(this.state.blog);
    const { title, text, img_url} = this.state.blog
    return (
      <div>
        <h2>Blog Post Form</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            {this.state.redirectHome && <Redirect to='/api/blogs' />}
            <label>
              <h3>Title</h3>
                <textarea rows='3' cols = '70'
                  name='title'
                  value={title}
                  onChange={this.handleChange.bind(this)}
                />
            </label>
            <br />

            <label>
              <h3>Text</h3>
              <textarea rows='6' cols='70'
                name='text'
                value={text}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />

            <label>
              <h3>Image Url</h3>
              <textarea rows='2' cols='70'
                name='img_url'
                value={img_url}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />

            <button className='button' type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}


