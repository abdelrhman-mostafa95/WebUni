import { useEffect, useState } from "react";
import HeroSection from "./HeroCourse";
import SearchCourses from "./SearchCourses";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setFiltered(data);
        const cats = ["All", ...new Set(data.map((c) => c.category))];
        setCategories(cats);
      });
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFiltered(courses);
    } else {
      setFiltered(courses.filter((course) => course.category === category));
    }
  };

  const handleSearch = (courseName, category) => {
    let results = courses;

    if (courseName) {
      results = results.filter((c) =>
        c.title.toLowerCase().includes(courseName.toLowerCase())
      );
    }

    if (category) {
      results = results.filter((c) =>
        c.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    setFiltered(results);
    setActiveCategory("All");
  };

  return (
    <>
      <HeroSection />

      <SearchCourses onSearch={handleSearch} />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-red-700">
          Explore Our Courses
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition 
              ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-red-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-left">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                  {course.category}
                </span>
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-yellow-500 font-semibold">
                    ⭐ {course.rating}
                  </p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesPage;
