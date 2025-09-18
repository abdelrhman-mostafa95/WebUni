import { useEffect, useState } from "react";

function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(
          (course) =>
            course.category.toLowerCase() === selectedCategory.toLowerCase()
        );
  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition duration-300 
                ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-1">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-gray-100 shadow-md hover:bg-red-700 hover:shadow-xl transition duration-300 rounded-lg overflow-hidden transform hover:-translate-y-2"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-50 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 font-medium group-hover:text-white">
                    {course.category}
                  </p>
                  <p className="text-red-700 font-medium group-hover:text-white">
                    {course.students} Students
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No courses found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
