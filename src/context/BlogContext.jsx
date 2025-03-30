import { createContext, useContext, useState } from "react";


const BlogContext = createContext();


export const useBlog = () => {
  return useContext(BlogContext);
};


const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); 

 
  const addBlog = (blog) => {
    setBlogs((prevBlogs) => [{ ...blog, id: Date.now(), comments: [] }, ...prevBlogs]);
  };

 
  const addComment = (blogId, comment) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === blogId
          ? { ...blog, comments: [...blog.comments, comment] }
          : blog
      )
    );
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
