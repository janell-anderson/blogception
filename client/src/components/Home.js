import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Header';


export default class Home extends Component {
  render() {
    return(
      <div>
        <h1>Welcome to Blogception</h1>

        <div className="intro">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    )
  }
}
