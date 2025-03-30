import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import NewBlog from "./Pages/NewBlog";
import BlogDetails from "./Pages/BlogDetails";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0d1321] text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route
            path="/new-blog"
            element={user ? <NewBlog /> : <Navigate to="/" />}
          />
          <Route
            path="/blog/:id"
            element={user ? <BlogDetails /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
