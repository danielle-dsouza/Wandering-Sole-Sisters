import React from "react";
import moment from "moment";

export default function BlogSummary({ blog }) {
  return (
    <div className="card z-depth-0 blog-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{blog.title}</span>
        <p>
          Posted by {blog.authorFirstName} {blog.authorLastName}
        </p>
        <p className="grey-text">{moment(blog.postedAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
}
