import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="border p-4 shadow-lg rounded-lg bg-[#f0ebd8] text-[#0d1321]">
      <h2 className="text-3xl font-bold">{blog.title}</h2>
      <p className="text-[#748cab] ">{blog.category}</p>
      <p className="mt-2 text-xl">{blog.content.substring(0,100)}...</p>
      <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-2 block">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
