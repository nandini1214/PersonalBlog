import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import CommentSection from "../Components/CommentSection";

const BlogDetails = () => {
  const { blogs, addComment } = useBlog();
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  const handleAddComment = (comment) => {
    addComment(blog.id, comment);
  };

  if (!blog) return <p className="text-center">Blog not found.</p>;

  return (
    <div className="container w-1/2  bg-[#f0ebd8] text-[#0d1321] mx-auto  py-7 px-10 mt-5 rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-10">{blog.title}</h1>
      <p className="text-black-600 text-md mb-6">{blog.category}</p>
      <p className=" text-2xl">{blog.content}</p>

     
      <CommentSection comments={blog.comments} addComment={handleAddComment} />
    </div>
  );
};

export default BlogDetails;
