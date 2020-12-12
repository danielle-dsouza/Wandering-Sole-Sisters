import React, { Component } from "react";
import "./Wildcard.scss";
import { Link } from "react-router-dom";

export default class Wildcard extends Component {
  render() {
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">404 Error - Page Lost in Space</span>
            <p>
              Oh dear, someone must be punished for this horrendous mistake.{" "}
            </p>
            <p>(Don't worry, we're firing our development team as we speak.)</p>
            <hr />
            <p className="center">
              In the meantime, please return to the <Link to="/" className="highlight">homepage</Link>{" "}
              or <Link to="/signin" className="highlight">sign in</Link> to view options related to
              your account.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
