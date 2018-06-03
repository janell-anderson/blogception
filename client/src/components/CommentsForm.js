import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
      comment: Object.assign({
        text: ''
      }, props.comment)
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState, props) => ({
      comment: {
        ...prevState.comment,
        [name]: value
      }
    }))
  }

  func(e) {
    this.props.func(this.state.comment)
  }

  handleSubmit(e) {
    e.preventDefault();
    // func=(this.state.blog);
    // window.location.reload();
  //   this.setState({
  //     text: ''
  //   });
  }

  render() {

    console.log(this.props.func);
    const { text } = this.state.comment;
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        {this.state.redirectHome && <Redirect to='/api/blogs/:id' />}
          <label>
              <h3>Create Comment</h3>
              <textarea rows='3' cols ='50'
                name='text'
                value={text}
                onChange={this.handleChange.bind(this)} />
          </label><br/>

            <button className="button" type='submit'>Submit</button>
        </form>
      </div>
     )
  }
}
