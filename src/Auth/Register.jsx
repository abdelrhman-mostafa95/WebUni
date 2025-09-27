import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const MotionForm = motion.form;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    reset();
    setTimeout(() => {
      navigate("/login");
    }, 700);
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
        {/* خلفية دوائر */}
        <div className="absolute -top-6 -left-6 w-14 h-14 bg-red-700 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-red-700 rounded-full blur-xl opacity-60 animate-pulse"></div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-red-700 drop-shadow-md">
          Create Account
        </h2>
        <p className="text-gray-600 text-center text-xs sm:text-sm -mt-2">
          Join us and explore amazing courses
        </p>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-4 focus:ring-red-500/50 
                       transition shadow-sm text-sm sm:text-base"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs sm:text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-4 focus:ring-red-500/50 
                       transition shadow-sm text-sm sm:text-base"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must be less than 20 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs sm:text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <input
            type="tel"
            placeholder="Phone (01xxxxxxxxx)"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-4 focus:ring-red-500/50 
                       transition shadow-sm text-sm sm:text-base"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Phone must be 11 digits",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs sm:text-sm">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg 
                     text-white shadow-lg transition-transform transform 
                     hover:scale-[1.03] active:scale-[0.98] 
                     bg-gradient-to-r from-red-700 to-red-600"
        >
          Register
        </button>

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </MotionForm>
    </div>
  );
}

export default Register;
