import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Login() {
  const MotionForm = motion.form;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      setLoginError("");
      navigate("/");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: "url('register-bg.jpg')" }}
    >
      <MotionForm
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl 
                   p-6 sm:p-10 w-full max-w-sm sm:max-w-md flex flex-col gap-6 border border-gray-200"
      >
        {/* خلفية دوائر متحركة */}
        <div className="absolute -top-6 -left-6 w-14 h-14 bg-red-700 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-red-700 rounded-full blur-xl opacity-60 animate-pulse"></div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-red-700 drop-shadow-md">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base -mt-2">
          Login to continue 🚀
        </p>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-4 focus:ring-red-500/50 
                       transition shadow-sm text-sm sm:text-base"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-4 focus:ring-red-500/50 
                       transition shadow-sm text-sm sm:text-base"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs sm:text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        {loginError && (
          <p className="text-red-500 text-xs sm:text-sm text-center">
            {loginError}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg 
                     text-white shadow-lg transition-transform transform 
                     hover:scale-[1.03] active:scale-[0.98] 
                     bg-gradient-to-r from-red-700 to-red-600"
        >
          Login
        </button>

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-red-600 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </MotionForm>
    </div>
  );
}

export default Login;
