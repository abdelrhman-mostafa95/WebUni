import { useState, useEffect } from "react";

function DashboardCourses() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("in-progress");

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const storedProgress =
          JSON.parse(localStorage.getItem("progress")) || {};

        
        const updatedCourses = data.map((course) => {
          const saved = storedProgress[course.id];
          return {
            ...course,
            progress: saved ? saved.progress : 0,
            status: saved ? saved.status : "not-started",
          };
        });

        setCourses(updatedCourses);
      })
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  const updateProgress = (courseId, newProgress) => {
    const updatedCourses = courses.map((c) =>
      c.id === courseId
        ? {
            ...c,
            progress: newProgress,
            status:
              newProgress === 0
                ? "not-started"
                : newProgress === 100
                ? "completed"
                : "in-progress",
          }
        : c
    );
    setCourses(updatedCourses);

    
    const progressData = {};
    updatedCourses.forEach((c) => {
      progressData[c.id] = {
        progress: c.progress,
        status: c.status,
      };
    });
    localStorage.setItem("progress", JSON.stringify(progressData));
  };

  const filteredCourses = courses.filter((c) => {
    if (filter === "in-progress") return c.status === "in-progress";
    if (filter === "completed") return c.status === "completed";
    if (filter === "not-started") return c.status === "not-started";
    return true; 
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-700">📊 Your Dashboard</h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-red-500"
        >
          <option value="all">All Courses</option>
          <option value="in-progress">In Progress</option>
          <option value="not-started">Not Started</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-gray-500 text-center">
          No courses found for this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {c.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{c.category}</p>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-red-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${c.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Progress:{" "}
                <span className="font-semibold text-red-700">
                  {c.progress}%
                </span>
              </p>

              <div className="flex justify-between">
                <button
                  onClick={() =>
                    updateProgress(c.id, Math.min(c.progress + 10, 100))
                  }
                  className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition"
                >
                  +10%
                </button>
                <button
                  onClick={() =>
                    updateProgress(c.id, Math.max(c.progress - 10, 0))
                  }
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
                >
                  -10%
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardCourses;
