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
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured Courses
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Discover top-quality free courses designed to help you build skills
          and advance your career in technology, business, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.slice(0, 8).map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition duration-300 
                ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-1">
          {filteredCourses.length > 0 ? (
            filteredCourses.slice(0, 9).map((course, index) => (
              <div
                key={index}
                className="group bg-gray-100 shadow-md hover:bg-red-700 hover:shadow-xl transition duration-300 rounded-lg overflow-hidden transform hover:-translate-y-2 relative"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-50 object-cover"
                  />
                  {course.free && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Free
                    </span>
                  )}
                </div>
                <div className="p-2 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 font-medium group-hover:text-white">
                    {course.category}
                  </p>
                  <p className="text-gray-500 font-medium group-hover:text-white">
                    {course.description}
                  </p>
                  <div className="flex items-center font-semibold mt-2">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-yellow-500">
                      {course.rating ?? "N/A"}
                    </span>
                  </div>
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
