import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: Object.assign({
        title: '',
        text: '',
        img_url: '',
      }, props.blog)
    }
  }
  // to edit a blog function with be here

  // a componentDidMount for likes and Reblog will be here

  render() {
    const { title, text, img_url, id } = this.state.blog;

    return(
      <div className="">
        <img src={img_url} className=''/>

        <h3>Title:</h3>
        <p className="">{title}</p>

        <h3>Description:</h3>
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
