import React from 'react';
// import ReactDOM from 'react-dom';
import App from "./App";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Blog from "./routes/Blog";
import Projects from "./routes/Projects";
import Home from "./routes/Home";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);