import React, { Component } from "react";
import BlogSummary from "./BlogSummary";

export default class BlogList extends Component {
  render() {
    const { blogs } = this.props;

    const blogList = blogs.map((blog) => {
      return <BlogSummary blog={ blog } key={ blog.id } />;
    });

    return (
      <div className="blog-list section">
          { blogList }
      </div>
    );
  }
}
