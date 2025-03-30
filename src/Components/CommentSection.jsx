import { useState } from "react";

const CommentSection = ({ comments, addComment }) => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      addComment({ text: comment, timestamp: new Date().toISOString() });
      setComment("");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">Comments</h2>

      
      <div className="mt-2">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((c, index) => (
            <div key={index} className="border p-2 my-2 rounded flex justify-between">
              <p>{c.text}</p>
              <p className="text-xs text-gray-500">
                {new Date(c.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>

      
      <div className="mt-4">
        <textarea
          className="border p-2 w-full rounded"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={handleCommentSubmit}
          className="shadow-[#3e5c76] shadow-2xl bg-[#3e5c76] text-white p-3 hover:bg-[#748cab]  px-4 py-2 mt-2 rounded"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
