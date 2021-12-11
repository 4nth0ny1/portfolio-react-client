import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WebIcon from '@mui/icons-material/Web';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default function Home() {
    return (
      <main>
        <div className="hero">
          <div className="hero-message">
            <h1>Anthony Catullo</h1>
            <h1>Portfolio</h1>
            <h2>You have projects. I can code it.</h2>
            <p>I'm a full stack developer in many languages and would love to code your next project.</p>
          </div>
          <img className="hero-image" src='programming.svg' alt="programming.svg" />
        </div>
        <div className="language-container">
          <h2>Languages, Libraries, and Frameworks I love...</h2>
          <p>Ruby</p>
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
          <p>Netlify</p>
        </div>

        <div className="teamwork-container">
          <img className="teamwork-image" src="teamwork.svg" alt="teamwork.svg" />
          <h2>What are the most important parts of developing truly great software and websites?</h2>
          <p>Teamwork</p>
          <p>Keeping and Open Mind</p>
          <p>Loving What You Do</p>
          <p>Teamwork</p>
        </div>

        <div className="about-projects-blog-container">
          <h2 className="about-projects-blog-header">Ready to find out more about me?</h2>
          <div className="home-card-container">
            <div className="home-card">
              <AccessibilityNewIcon className="icon"/>
              <p>about</p>
            </div>
            <div className="home-card">
              <WebIcon className="icon" />
              <p>projects</p>
            </div>
            <div className="home-card">
              <RssFeedIcon className="icon" />
              <p>blog</p>
            </div>
          </div>
        </div>
      </main>
    );
  }