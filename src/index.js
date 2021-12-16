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
import LinkPage from "./routes/LinkPage";
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
          <Route path="LinkPage" element={<LinkPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  rootElement
);