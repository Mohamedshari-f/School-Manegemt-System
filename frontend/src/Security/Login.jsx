import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("students"); // default = students

  const navigate = useNavigate();

  function handleInsert(e) {
    e.preventDefault();
axios.post("http://localhost:6200/login/admin",{
  email,
  password
})
      .then((res) => {
        toast.success(`${active} login successfully`);

        // Save to localStorage and navigate
        setTimeout(()=>navigate("/dash"),1000)
         localStorage.setItem(active==="students"? "student":"admin",JSON.stringify(res))
      })
      .catch((err) => {
        toast.error(err.response?.data?.error || "Invalid email or password");
      });
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div className="flex justify-center gap-8">
         
          <h1
          
            className="px-12 py-3 rounded-2xl 
                 bg-blue-500 text-white"
            
          >
            Admin Login
          </h1>
        </div>


        <form className="space-y-4" onSubmit={handleInsert}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="password"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-2 text-white font-medium"
          >
            Login Admin
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Login;