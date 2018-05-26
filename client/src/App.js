import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwt from 'jwt-js';
import Nav from './components/Header';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      currentUser: null
    }
    this.handleRegister = this.handleRegister.bind(this);
  }
  // we will be fetching from the posts database
  fetchBlogs() {
    fetch('/api/blogs')
      .then(resp => {
        if(!resp.ok) {
          throw Error('oops: ', resp.message);
        }
        return resp.json();
    }).then(data => this.setState ({
      blogs: data.data
    })).catch(err => console.log(`error: ${err}`))
  }

  //auth section
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
      if (!resp.ok) throw new Error(resp.mesage);
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

  registerRequest(creds) {
    fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => {
        if (!resp.okay)
          throw new Error (resp.statusMessage);
        return resp.json
      })
      .then(respBody => {
        console.log(respBody);
        localStorage.setItem('authToken', respBody.token);
        this.setState({
          currentUser: jwt.decodeToken(respBody.token).payload
        })
      })
  }

  handleRegister(creds) {
    this.registerRequest(creds);
  }

  componentDidMount() {
    this.fetchBlogs();
    this.checkToken();
  }

  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={(props) => (
            <Home
              {...props}
              name={this.state.currentUser}
              blogs={this.state.blogs}
            /> )} />

          <Route exact path='/api/auth/register' component={(props) => (
            <RegisterForm
              {...props}
                handleRegister={this.handleRegister}
            /> )} />
        </Switch>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <Switch>
//           <Route exact path='/' component={Home} />
//           <Route path='/register' component={RegisterForm} />
//           </Switch>
//       </div>
//     );
//   }
// }
// export default App;
