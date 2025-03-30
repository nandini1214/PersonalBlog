
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Search, LogOut, PlusCircle } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="px-20 py-5 mx-20 my-5 flex justify-between items-center bg-[#0d1321] rounded-b-4xl text-[#f0ebd8] shadow-[#3e5c76] shadow-2xl">
      <Link to="/home" className="text-4xl font-bold text-[#f0ebd8]">SHashA</Link>
      {user && (
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border p-2 pl-10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <Search className="absolute left-3 top-2 text-gray-500" size={18} />
          </div>
          <Link to="/new-blog" className="flex  bg-[#f0ebd8] text-[#0d1321] px-4 py-2 rounded shadow-[#748cab] shadow-md hover:bg-[#0d1321] hover:text-[#f0ebd8] transition">
            <PlusCircle size={20} className="mr-1 " /> New Blog
          </Link>
          <button 
            onClick={logout} 
            className="flex items-center text-red-500 hover:text-red-700 transition"
          >
            <LogOut size={20} className="mr-1" /> Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;