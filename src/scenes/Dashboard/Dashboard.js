import React, { Component } from "react";
import Notifications from "./Notifications";
import BlogList from "../../components/Blog/BlogList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { blogs, notifications, signedIn } = this.props;

    if (!signedIn) return (<Redirect to='/signin' />);

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <BlogList blogs={blogs} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} blogs={blogs} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.firestore.ordered.blogs,
    notifications: state.firestore.ordered.notifications,
    signedIn: state.firebase.auth.uid ? true : false,
  };
};

export default compose(
  firestoreConnect(() => [
    // If you only want a certain number of posts to be shown:
    // { collection: "blogs", limit: 5, orderBy: ['postedAt', 'desc'] },
    { collection: "blogs", orderBy: ["postedAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]),
  connect(mapStateToProps)
)(Dashboard);
