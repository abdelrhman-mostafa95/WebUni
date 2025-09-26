import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Courses from "./Courses/Courses";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import FooterSection from "./Footer/Footer";
// import ProductDetails from "./ProductDetails/ProductDetails"; // لو عايز تزود دا بعدين

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
