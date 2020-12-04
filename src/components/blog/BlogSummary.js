import React from "react";

export default function BlogSummary({blog}) {
  return (
    <div className="card z-depth-0 blog-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{ blog.title }</span>
        <p>Posted by Danielle D'Souza</p>
        <p className="grey-text">Dec 3, 2020</p>
      </div>
    </div>
  );
};
