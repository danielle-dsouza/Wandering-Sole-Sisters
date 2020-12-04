import React from "react";

export default function BlogDetails(props) {

    const id = props.match.params.id;

  return (
    <div className="container section blog-details">
      <div class="card z-depth-0">
        <div class="card-content">
          <span class="card-title">Blog Title - {id}</span>
          <p>I am a very simple blog. I cool info. You should read me.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Danielle D'Souza</div>
          <div>Dec 3, 2020</div>
        </div>
      </div>
    </div>
  );
}