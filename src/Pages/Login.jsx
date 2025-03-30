import { useState, useContext } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="h-screen w-full bg-transparent flex  justify-center items-center text-[#0d1321] shadow-2xl ">
      <form onSubmit={handleSubmit} className="px-10 py-8 bg-[#f0ebd8] w-1/3  shadow-[#3e5c76] shadow-2xl rounded-lg flex flex-col ">
        <h2 className="text-3xl text-center mb-6 font-bold">Login</h2>
        <input
          type="email"
          className=" w-full p-3 border-none mb-5 text-black placeholder:text-black shadow-[#3e5c76] shadow-md rounded-md border-gray-500 hover:border-[#3e5c76]"//
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className=" w-full p-3  mb-5 text-black placeholder:text-black shadow-[#3e5c76] shadow-md rounded-md border-gray-500 hover:border-[#3e5c76]"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full shadow-[#3e5c76] shadow-2xl bg-[#3e5c76] text-white p-3 hover:bg-[#748cab] rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
