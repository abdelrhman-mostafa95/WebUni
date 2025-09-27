import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroDetails from "./HeroDeatils";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c) => String(c.id) === id);
        setCourse(found);

        const storedProgress =
          JSON.parse(localStorage.getItem("progress")) || {};
        if (storedProgress[found?.id]) {
          setAdded(true);
        }
      })
      .catch((err) => console.error("Error loading course:", err));
  }, [id]);

  const handleAddCourse = () => {
    if (!course) return;

    const storedProgress = JSON.parse(localStorage.getItem("progress")) || {};

    if (!storedProgress[course.id]) {
      storedProgress[course.id] = {
        status: "in-progress",
        progress: 10,
      };
      localStorage.setItem("progress", JSON.stringify(storedProgress));
      setAdded(true);
    }
  };

  if (!course) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Loading course details...
      </div>
    );
  }

  return (
    <>
      <HeroDetails />
      <section className="max-w-5xl mx-auto py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-80 object-cover"
          />

          <div className="p-8">
            <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded mb-4">
              {course.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {course.title}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              {course.longDescription || course.description}
            </p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Topics Covered:
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {course.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-yellow-500 font-semibold text-lg">
                ⭐ {course.rating}
              </p>

              <div className="flex gap-3">
                <a
                  href={course.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 text-white rounded-2xl shadow-lg hover:bg-red-700 hover:scale-105 transform transition duration-200 inline-block text-center"
                >
                  Enroll Now
                </a>

                <button
                  onClick={handleAddCourse}
                  disabled={added}
                  className={`px-6 py-3 rounded-2xl shadow-lg transition duration-200 inline-block text-center font-semibold ${
                    added
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700 hover:scale-105"
                  }`}
                >
                  {added ? "Added ✓" : "Add to Your Courses"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
