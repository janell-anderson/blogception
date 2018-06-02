import React, { Component } from 'react';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    comment: Object.assign({
      text: '',
      }, props.comment)
    }
  }

  render() {
    const { text } = this.state.comment;
    return(
      <div>
        <h3>Comment List</h3>

      </div>
    )
  }
}
