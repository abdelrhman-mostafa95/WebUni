import { useState } from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import SearchCourses from "./Search";
import FeaturedCourses from "./FeaturedCourses";

function Home() {
  const [filters, setFilters] = useState({ course: "", category: "" });

  const handleSearch = (course, category) => {
    setFilters({ course, category });
  };
  return (
    <>
      <Hero />
      <SearchCourses onSearch={handleSearch} />
      <Categories filters={filters} />
      <FeaturedCourses />
    </>
  );
}

export default Home;
