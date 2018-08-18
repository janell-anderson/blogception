import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments';
// import CommentsList from './CommentsList';

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: Object.assign({
        title: '',
        text: '',
        img_url: '',
      }, props.blog),
      comment: Object.assign({
        text: ''
      }, props.comment)
    }
  }
  // to edit a blog function with be here

  // a componentDidMount for likes and Reblog will be here
  // componentDidMount {

  // }

  render() {
    const { title, text, img_url, id } = this.state.blog;
    console.log("Hiiiiiii",this.props);
    return(
      <div className="">
        <img src={img_url} alt='' className=''/>

        <h3>{title}</h3>

        <p className="">{text}</p>

        <br />
        <Link to={`/api/blogs/${id}/edit`}>
          <button className='button'>Edit</button>
        </Link>

        <Link to="/api/blogs">
          <button className='button' onClick={this.props.del}> Delete </button>
        </Link>

        
      </div>
    )
  }
}
// <Comments comment = {this.props.comment}/>