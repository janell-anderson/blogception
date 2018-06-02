import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    comment: Object.assign({
      text: '',
      }, props.comment)
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState, props) => ({
      comment: {
        ...prevState.blog,
        [name]: value
      }
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.func(this.state.comment);
  }

  render() {
    console.log(this.state.comment);
    const { text } = this.state.comment;
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        {this.state.redirectHome && <Redirect to='/api/blogs/:id' />}
          <label>
              <h3>Comment Form</h3>
              <textarea rows='3' cols ='70'
                name='text'
                value={text}
                onChange={this.handleChange.bind(this)} />
            </label><br/>

            <button className="" type='submit'>Submit</button>
        </form>
      </div>
     )
  }
}
