import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Nav from './Header';
import Footer from './Footer';


export default class Home extends Component {
  render() {
    return(
      <div className="intro">
        <h1>Welcome to Blogception</h1>

        <div className="">
          <p>Blogception is a blogging site where you can write about your latest hobbies, interests or just life.</p>
          <p></p>
        </div>
        <Footer />
      </div>
    )
  }
}
