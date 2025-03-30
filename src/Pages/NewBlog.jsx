import { useState, useContext } from "react";
import { useBlog } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && category) {
      addBlog({ title, content, category });
      navigate("/home");
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center w-1/2 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col  ">
        <div className="flex gap-3 mb-4 w-full">
        <input
          type="text"
          placeholder="Title"
          className=" p-2 w-full rounded bg-[#f0ebd8]  placeholder:text-gray-600 text-[#0d1321] shadow-[#748cab] shadow-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className=" p-2 w-full rounded bg-[#f0ebd8]  placeholder:text-gray-600 text-[#0d1321] shadow-[#748cab] shadow-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        </div>
       
        <textarea
          placeholder="Content"
          className=" p-2 mb-6 w-full h-100 rounded bg-[#f0ebd8]  placeholder:text-gray-600 text-[#0d1321] shadow-[#748cab] shadow-md"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit" className="shadow-[#3e5c76] shadow-2xl bg-[#3e5c76] text-white p-3 hover:bg-[#748cab] rounded-md  ">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
