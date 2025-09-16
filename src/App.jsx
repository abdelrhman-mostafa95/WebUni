import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Courses from "./Courses/Courses";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//  <Route path="/productdetails/:id" element={<ProductDetails />} />
