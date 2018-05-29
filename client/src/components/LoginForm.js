import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleInputChange = this. handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.perventDefault();
    this.props.handleLogin(this.state);
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div> <h2>Log In</h2>
        <form onSubmit={this.handleSubmit} method="post">
          <label htmlFor="username">
            <input
              placeholder="Username"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.username}
              name="username"
            />
          </label>
          <br />

          <label htmlFor="email">
            <input
              placeholder="Email"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email"
            />
          </label>
          <br />

          <label htmlFor="password">
            <input
              placeholder="Password"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
            />
          </label>
          <br />

          <input
            className="button"
            type="submit"
            value="Login"
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}
