import React, { useState } from "react";

function CommentSection({ comments, onSubmit }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newComment);
    setNewComment("");
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.author}</strong>: {comment.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
