import React from 'react';
import './BlogCard.css';

function BlogCard(props) {
  const { post } = props;

  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-details">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div className="blog-card-tags">
          {post.tags && post.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a href={post.url}>Read More</a>
      </div>
    </div>
  );
}

export default BlogCard;
