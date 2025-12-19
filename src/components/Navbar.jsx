import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
        <h1>My Portfolio</h1>
        <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </nav>
    </header>
  );
}