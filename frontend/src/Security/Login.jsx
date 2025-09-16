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

    const url =
      active === "students"
        ? "http://localhost:6200/login/students"
        : "http://localhost:6200/login/admin";

    const payload = { email, password };

    axios
      .post(url, payload)
      .then((res) => {
        toast.success(`${active} login successfully`);

        // Save to localStorage and navigate
        if (active === "students") {
          localStorage.setItem("students", JSON.stringify(res.data));
          setTimeout(() => navigate("/ExamAdmin"), 1500); // students dashboard
        } else {
          localStorage.setItem("admin", JSON.stringify(res.data));
          setTimeout(() => navigate("/dash"), 1500); // admin dashboard
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.error || "Invalid email or password");
      });
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setActive("students")}
            className={`px-12 py-3 rounded-2xl ${
              active === "students"
                ? "bg-blue-500 text-white"
                : "border-2 border-black text-black"
            }`}
          >
            students
          </button>
          <button
            onClick={() => setActive("admin")}
            className={`px-12 py-3 rounded-2xl ${
              active === "admin"
                ? "bg-blue-500 text-white"
                : "border-2 border-black text-black"
            }`}
          >
            Admin
          </button>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight mb-1">Login</h2>

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
            className="w-full rounded-xl bg-gray-900 px-4 py-2 text-white font-medium hover:bg-black"
          >
            {active === "students" ? "Login students" : "Login Admin"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Login;
