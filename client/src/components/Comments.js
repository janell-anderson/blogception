import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
    console.log(this.props);
    console.log("Hi i am trying to map comments");
    const list = 
    this.props.comment.map(comment => (
      <CommentsList text = {comment.text}/>
      ))

    return(
      <div className="">
        <h3>Comment List</h3>
        {list}
        <CommentsForm />
      </div>
    )
  }
}


