import React, { Component } from "react";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-bg">
          <div className="home-motto">Discover your elsewhere...</div>
        </div>

        <div className="c-div">
          <hr />
          <div className="quick-notes">
            <div>
              <i className="material-icons medium">public</i>
              <h3>Track your travels!</h3>
              <p>
                Track your plan for world domination by documenting your
                experiences!
              </p>
            </div>
            <div>
            <i className="material-icons medium">person</i>
              <h3>Connect with friends!</h3>
              <p>Share your adventures with friends!</p>
            </div>
            <div>
            <i className="material-icons medium">location_on</i>
              <h3>Research your next trip!</h3>
              <p>Read about others' experiences in different countries!</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
