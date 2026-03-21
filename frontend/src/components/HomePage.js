import React, { Component } from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link, 
  NavLink 
} from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <p>Welcome to the Home Page</p>
    );
  }
}
