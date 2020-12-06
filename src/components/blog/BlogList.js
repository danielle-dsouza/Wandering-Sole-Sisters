import React, { Component } from "react";
import { Link } from 'react-router-dom';
import BlogSummary from "./BlogSummary";

export default class BlogList extends Component {
  render() {
    const { blogs } = this.props;

    const blogList = blogs && blogs.map((blog) => {
      return (
        <Link to={ '/blog/' + blog.id } key={ blog.id }>
          <BlogSummary blog={ blog } />
        </Link>
      );
    });

    return (
      <div className="blog-list section">
          { blogList }
      </div>
    );
  }
}