import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

export default class Comments extends Component {
constructor(props) {
    super(props)
    this.state = {
      comment: Object.assign({
        text: '',
      }, props.comment)
    }
  }

  render() {
    // const { text } = this.state.comment
    // console.log(this.props.text);

    return(
      <div className="">
        <CommentsForm />
      </div>
    )
  }
}

        // {this.props.comments.map(comment => (
        //   <div key={comment.id} className="">
        //       <div key={comment.id}>
        //         <p>{comment.text}</p>
        //         </div>
        //       </div>
        //   ))}
