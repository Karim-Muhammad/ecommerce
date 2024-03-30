import React from "react";
import { blogs } from "constants";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <h3>Newsletter Blogs</h3>

      <div className="blogs">
        {blogs.map((blog, index) => (
          <div className="blog" key={index}>
            <div className="blog-image">
              <img src={blog.image} alt={`blog-${index}`} />
            </div>
            <div className="blog-content">
              <p className="small text-muted ">{blog.date}</p>
              <h3 className="">{blog.title}</h3>
              <p className="text-body text-muted ">{blog.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsletterSection;
