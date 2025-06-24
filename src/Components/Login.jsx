import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1929D6]">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#1929D6]"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#1929D6]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1929D6] text-white py-2 rounded-md hover:bg-[#0f1fb8] transition cursor-pointer"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-[#1929D6] hover:underline block cursor-pointer"
        >
           Back
        </button>
      </div>
    </div>
  );
};

export default Login;
