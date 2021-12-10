import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link> 
        <Link className="link" to="/blog">Blog</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </>
  );
}

