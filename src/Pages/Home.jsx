import { useContext } from "react";
import {  useBlog } from "../context/BlogContext";
import BlogCard from "../Components/BlogCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { blogs } = useBlog();

  return (
    <div className="container mx-auto p-4 h-full ">
      
      {blogs.length === 0 ? (
        <div className="flex flex-col items-center ">
          <p className="mt-10 mb-6 text-2xl">No blogs found</p>
          <Link to="/new-blog" className="bg-[#f0ebd8] text-[#0d1321] px-6 py-4 rounded shadow-[#748cab] shadow-md hover:bg-[#0d1321] hover:text-[#f0ebd8]">
            Create New Blog
          </Link>
        </div>
      ) : (
         
        <div>
          <h1 className="text-4xl font-bold mb-7 text-center">All Blogs</h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
