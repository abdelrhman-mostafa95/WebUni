import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="md:container md:mx-auto mx-auto flex items-center justify-between py-4 px-6 md:px-30 ">
        <div className="text-2xl font-bold text-white">
          <span className="text-gray-200">Web</span>
          <span className="text-red-700">Uni</span>
          <p className="text-xs text-gray-300">Learn From the Best</p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-semibold" : "hover:text-red-700"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-semibold" : "hover:text-red-700"
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-semibold" : "hover:text-red-700"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-semibold" : "hover:text-red-700"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-red-700 font-semibold" : "hover:text-red-700"
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link to="/login">
            <button className="w-full bg-red-700 hover:bg-red-500 text-white px-5 py-2 rounded">
              Login
            </button>
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black bg-opacity-80 text-white px-6 py-4 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "text-red-700 font-semibold" : "hover:text-red-700") +
              " block"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              (isActive ? "text-red-700 font-semibold" : "hover:text-red-700") +
              " block"
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              (isActive ? "text-red-700 font-semibold" : "hover:text-red-700") +
              " block"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              (isActive ? "text-red-700 font-semibold" : "hover:text-red-700") +
              " block"
            }
          >
            Contact
          </NavLink>

          <Link to="/register">
            <button className="w-full bg-red-700 hover:bg-red-500 text-white px-5 py-2 rounded">
              Login
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
