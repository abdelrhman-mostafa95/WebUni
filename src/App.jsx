import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";

import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import FooterSection from "./Footer/Footer";
import CoursesPage from "./Courses/Courses";
import CourseDetails from "./Courses/CourseDetails";
// import ProductDetails from "./ProductDetails/ProductDetails"; // لو عايز تزود دا بعدين

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
