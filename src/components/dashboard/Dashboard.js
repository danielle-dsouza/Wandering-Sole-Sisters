import React, { Component } from "react";
import Notifications from "./Notifications";
import BlogList from "../blog/BlogList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { blogs } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <BlogList blogs={ blogs } />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs,
  };
};

export default connect(mapStateToProps)(Dashboard);
