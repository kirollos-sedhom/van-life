import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className="logo">
        #VanLife
      </Link>
      <span className="nav-links">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "selected" : ""}
        >
          about
        </Link>
        <Link to="/vans">vans</Link>
      </span>
    </nav>
  );
}
