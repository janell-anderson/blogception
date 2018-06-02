import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.State = {
      username: ''
    }
  }

  render() {
    return(
      <h1>I am A profile</h1>
      )
  }
}
