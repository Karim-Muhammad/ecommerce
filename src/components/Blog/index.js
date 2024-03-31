import React from "react";
import { Link } from "react-router-dom";

import "./Blog.scss";
const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog-content">
        <span className="blog-date">{blog.date}</span>
        <h4 className="blog-title">{blog.title}</h4>
        <p className="blog-text">{blog.text}</p>
        <Link className="btn btn-dark blog-link" to="/blog/1">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Blog;
