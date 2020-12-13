import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import { Redirect } from 'react-router-dom';

import Loader from "../UI/Loader/Loader";

function BlogDetails(props) {
  const { blog, signedIn } = props;

  if (!signedIn) return ( <Redirect to='/signin' />);

  if (blog) {
    return (
      <div className="container section blog-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{blog.title}</span>
            <p>{blog.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {blog.authorFirstName} {blog.authorLastName}
            </div>
            <div>{moment(blog.postedAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
}

const mapStateToProps = (state, myProps) => {
  const id = myProps.match.params.id;
  const blog = state.firestore.data.blogs
    ? state.firestore.data.blogs[id]
    : null;

  return {
    signedIn: state.firebase.auth.uid ? true : false,
    blog: blog
  };
};

export default compose(
  firestoreConnect((props) => {
    return [{ collection: "blogs", doc: props.match.params.id }];
  }),
  connect(mapStateToProps)
)(BlogDetails);
