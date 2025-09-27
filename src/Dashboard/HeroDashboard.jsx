import { useState, useEffect } from "react";

function HeroDashboard() {
  const [userName, setUserName] = useState("Student"); 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name) {
      setUserName(storedUser.name);
    }
  }, []);

 
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses"));
    if (storedCourses && Array.isArray(storedCourses)) {
      setTotalCourses(storedCourses.length);
    }
  }, []);

  return (
    <section className="py-20 text-center text-white relative">
      <img
        src="/bg-1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="max-w-6xl mx-auto px-6 py-6 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome, <span className="text-red-700">{userName}</span>!
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-6 leading-relaxed">
          You are currently enrolled in{" "}
          <span className="font-semibold">{totalCourses}</span> courses. Track
          your progress, explore new content, and keep learning every day. 🚀
        </p>
        <a
          href="#my-courses"
          className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Go to My Courses
        </a>
      </div>
    </section>
  );
}

export default HeroDashboard;
