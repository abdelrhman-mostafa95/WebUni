import { useEffect, useState, useMemo } from "react";

function Categories() {
  const imagesCards = [
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
  ];
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const categories = useMemo(() => {
    const grouped = {};

    courses.forEach((course) => {
      if (!grouped[course.category]) {
        grouped[course.category] = {
          category: course.category,
          image: course.image,
          count: 1,
          title: course.title,
        };
      } else {
        grouped[course.category].count++;
      }
    });

    return Object.values(grouped);
  }, [courses]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Course Categories
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Explore our wide range of online courses across different fields.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-1">
          {" "}
          {categories.slice(0, 6).map((cat, index) => (
            <div
              key={index}
              className="group bg-gray-100 shadow-md hover:bg-red-700 hover:shadow-xl transition duration-300 rounded-lg overflow-hidden transform hover:-translate-y-2"
            >
              {" "}
              <img
                src={imagesCards[index % imagesCards.length]}
                alt={cat.category}
                className="w-full h-50 object-cover"
              />
              <div className="p-6 text-left">
                {" "}
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
                  {" "}
                  {cat.category}{" "}
                </h3>{" "}
                <p className="text-gray-700 font-medium group-hover:text-white">
                  {" "}
                  {cat.title} Courses{" "}
                </p>{" "}
                <p className="text-red-700 font-medium group-hover:text-white">
                  {" "}
                  {cat.count} Courses{" "}
                </p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

export default Categories;
