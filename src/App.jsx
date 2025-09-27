import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import FooterSection from "./Footer/Footer";
import CoursesPage from "./Courses/Courses";
import CourseDetails from "./Courses/CourseDetails";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./Dashboard/Dashboard";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
