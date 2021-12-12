import { Outlet, Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-nav">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link> 
                <Link className="link" to="/blog">Blog</Link>
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
        </div>
    )
}