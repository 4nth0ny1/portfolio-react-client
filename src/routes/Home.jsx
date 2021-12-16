import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WebIcon from '@mui/icons-material/Web';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from "react-router-dom";


export default function Home() {
    return (
      <main>
        <div className="hero">
          <div className="hero-message">
            <h1>Anthony Catullo</h1>
            <h1>Portfolio</h1>
            <h2>You have projects. I can code them.</h2>
            <br></br>
            <p>I'm a full stack developer with many languages in my belt and </p>
            <p>would love to code your next project.</p>
          </div>
          <img className="hero-image" src='programming.svg' alt="programming.svg" />
        </div>

        <div className="language-container">
          <h2 className="lang-header">Frameworks, Languages, and Libraries I love to use...</h2>
          {/* <p>Ruby</p>
          <p>Ruby on Rails</p>
          <p>Sinatra</p>
          <p>ReactJS</p>
          <p>JavaScript</p>
          <p>Ruby</p>
          <p>Bootstrap</p>
          <p>Material UI</p>
          <p>Express</p>
          <p>NodeJS</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>React Router v5/v6</p>
          <p>MySQL</p>
          <p>PostgresQL</p>
          <p>SQLite3</p>
          <p>Heroku</p>
          <p>Github</p>
          <p>Netlify</p> */}
        </div>

        <div className="teamwork-container">
          <img className="teamwork-image" src="teamwork.svg" alt="teamwork.svg" />
          <h2>What do I think are the most important parts of developing truly great software and websites?</h2>
          <p>Teamwork</p>
          <p>Keeping and Open Mind</p>
          <p>Loving What You Do</p>
          <p>Teamwork</p>
        </div>

        <div className="about-projects-blog-container">
          <h2 className="about-projects-blog-header">Ready to find out more about me?</h2>
          <div className="home-card-container">
            <Link className="link" to="/about">
              <div className="home-card">
                <AccessibilityNewIcon className="icon"/>
                <p>about</p>
              </div>
            </Link>
            <Link className="link" to="/projects">
            <div className="home-card">
              <WebIcon className="icon" />
              <p>projects</p>
            </div>
            </Link>
            <Link className="link" to="/blog">
            <div className="home-card">
              <RssFeedIcon className="icon" />
              <p>blog</p>
            </div>
            </Link>
          </div>
        </div>
      </main>
    );
  }