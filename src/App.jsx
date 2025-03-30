import { Routes, Route, Navigate } from "react-router-dom";

import {Navbar,Login,NewBlog,BlogDetails,Footer,Home} from './index';
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
          <Route path="/new-blog" element={user ? <NewBlog /> : <Navigate to="/" />} />
          <Route path="/blog/:id" element={user ? <BlogDetails /> : <Navigate to="/" />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
