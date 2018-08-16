import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import jwt from 'jwt-js';
import Nav from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import EditBlog from './components/EditBlog';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreateBlog from './components/CreateBlog';
import Comments from './components/Comments';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      comments: [],
      currentUser: null
    }
    this.findBlog = this.findBlog.bind(this);
    this.findComment = this.findComment.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  // we will be fetching from the posts database

  fetchBlogs() {
    console.log("hello i'm a fetchBlogs")
    fetch('/api/blogs')
      .then(resp => {
        if(!resp.ok) {
          throw Error('oops: ', resp.message);
        }
        return resp.json();
    }).then(data => this.setState ({
      blogs: data.data
    })).catch(err => console.log(`error: ${err}`))
    //
    this.fetchComments();
  }


  fetchComments() {
    console.log("hello i'm fetchComments")
    fetch('/api/comment')
      .then(resp => {
        if(!resp.ok) {
          throw Error('oops: ', resp.message);
        }
        return resp.json();
    }).then(data => this.setState ({
      comments: data.data
    })).catch(err => console.log(`error: ${err}`))
  }

  // finding a blog by a specific id
  findBlog(id) {
    const blog = this.state.blogs.filter(t => (t.id === parseInt(id, 10)));
    return blog[0];
  }

  findComment(id) {
    const comment = this.state.comments.filter(s => (s.id === parseInt(id, 10)));
    return comment[0];
  }

  // a function for creating a blog post
  createBlog(blog) {
    console.log("hello i'm fetchComments")
    fetch('/api/blogs/new', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resBody => {
      this.setState((prevState, props) => {
        return {
          blogs: prevState.blogs.concat(resBody.data)
        }
      })
    })
  }

  // updating a blog post
  updateBlog(blog) {
    // console.log('blog');
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blog)
    };
    const URL = `/api/blogs/${blog.id}`;
    fetch(URL, options).then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
  }

  // deleting a blog post
  deleteBlog(id) {
    fetch(`/api/blogs/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      this.setState((prevState, props) => {
        return {
          blogs: prevState.blogs.filter(blog => blog.id !== id)
        }
      })
    })
  }

  // Create Comment
  createComment(comment) {
    fetch('/api/comment/new', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resBody => {
      this.setState((prevState, props) => {
        return {
          comments: prevState.comments.concat(resBody.data)
        }
      })
    })
  }

  // Update Comment
  updateComment(comment) {
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    };
    const URL = `/api/comment/${comment.id}`;
    fetch(URL, options).then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
  }

  // Delete a Comment
  deleteComment(id) {
    fetch(`/api/comment/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      this.setState((prevState, props) => {
        return {
          comments: prevState.comments.filter(comment => comment.id !== id)
        }
      })
    })
  }

  //auth section
  // checkToken checks the users token
  checkToken() {
    const authToken = localStorage.getItem('authToken');
    fetch('/api/auth', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.message);
      return resp.json();
    })
    .then(respBody => {
      this.setState({
        currentUser: respBody.user
      })
    })
    .catch(err => {
      console.log('not logged in');
      localStorage.removeItem('authToken');
      this.setState({
        currentUser: null
      })
    })
  }

  // When a user register we are fetching it from the designated url as a method POST.
  // the user will then get a token
  registerRequest(creds) {
    fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => {
        if (!resp.ok) throw new Error (resp.statusMessage);
        return resp.json();
      })
      .then(respBody => {
        console.log(respBody);
        localStorage.setItem('authToken', respBody.token);
        this.setState({
          currentUser: jwt.decodeToken(respBody.token).payload
        })
      })
  }


  loginRequest(creds) {
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      console.log(respBody);
      localStorage.setItem('authToken', respBody.token);
      this.setState({
        currentUser: jwt.decodeToken(respBody.token).payload
      })
    })
  }

  handleLogin(creds) {
    this.loginRequest(creds);
  }

  handleRegister(creds) {
    this.registerRequest(creds);
  }

  handleDelete(id) {
    this.deleteBlog(id);
    window.location.reload();
  }

  handleLogout() {
    this.setState({currentUser: null});
  }

  componentDidMount() {
    this.fetchBlogs();
    // this.fetchComments();
    this.checkToken();
  }

  render() {
    console.log(this.state);
    return(
      <div className="App">
          <Nav user={this.state.currentUser}/>

        <Switch>

         <Route exact path='/api/blogs/new' component={() => (

            <CreateBlog
              onSubmit={this.createBlog.bind(this)}
              user={this.state.currentUser}
            /> )} />

          <Route exact path='/api/comment/new' component={() => (
              <Comments
            /> )} />

          <Route exact path='/api/blogs/:id/edit' component={(props) => (

            <EditBlog
              {...props}
              blog={this.findBlog(props.match.params.id)}
              onSubmit={this.updateBlog.bind(this)}
              user={this.state.currentUser}
            /> )} />

          <Route path='/api/blogs/:id' component={(props) => (

            <Blog
              {...props}
              blog={this.findBlog(props.match.params.id)}
              del={() => this.handleDelete(props.match.params.id)}
              user={this.state.currentUser}
              comments={this.state.comments}
            /> )} />

          <Route exact path='/api/blogs' component={(props) => (
             console.log("blogs"),
            <Blogs
              {...props}
              blogs={this.state.blogs}
            /> )} />

          <Route exact path='/api/auth/login' component={(props) => (
            <LoginForm
              {...props}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              currentUser={this.state.currentUser}
            /> )} />

          <Route exact path='/api/auth/register' component={(props) => (
            <RegisterForm
              {...props}
                handleRegister={this.handleRegister}
            /> )} />

          <Route path='/' component={(props) => (
            <Home
              {...props}
              name={this.state.currentUser}
              blogs={this.state.blogs}
              comments={this.state.comments}
            /> )} />

        </Switch>
      </div>
    );
  }
}

          // <Route exact path='/api/blogs/profile' component={(props) => (
          //   <Profile

          //   /> )} />
