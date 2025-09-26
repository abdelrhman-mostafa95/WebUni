import { useState } from "react";

function SearchCourses({ onSearch }) {
  const [searchCourse, setSearchCourse] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchCourse, searchCategory);
  };

  return (
    <section className="bg-red-700 py-5 md:py-16 mt-5 md:mt-20 md:mx-50">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Search your course
        </h2>

        <form
          onSubmit={handleSearch}
          className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="text"
            placeholder="Course"
            value={searchCourse}
            onChange={(e) => setSearchCourse(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Category"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 transition"
          >
            Search Course
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchCourses;
