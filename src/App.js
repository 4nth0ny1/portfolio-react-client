import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="hero">
        <h1>Anthony Catullo Portfolio</h1>
      </div>
      <Outlet />
    </>
  );
}

