

export default function About() {
    return (
      <>
        <div className="about about-first-section">
          <div className="about-top-text">
            <h2 className="about-header">Who am I?</h2>

            <p>I'm a former salesman and marketer, turned software developer, and I'm currently looking for a position with a great team of developers that want to do great things.</p>

            <br></br>

            <p>This may sound corny, but I really feel like programmers have the power to shape the world. I think that even the smallest program can have an immense impact. I want to be part of a team that embodies that kind of mentality.</p>
          </div>
          <br></br>
          <img className="computers" src="/computers.jpg" alt="computers" />
        </div>

        <div className="about tech-section">

          <p>My favorite way of thinking about technologies is "tools in a toolbox." What is the best tool for this particular job? I guess this makes me language neutral.</p>

          <br></br>

          <p>I started with Ruby, Sinatra, and Ruby on Rails, which I think are fine technologies. They're really easy to learn and a great starting point for any new developer. I wish to continue to with these languages, while continuing to expand my repetoire.</p>

          <br></br>

          <p>These days I find myself neck deep in JavaScript. I love how much it's grown over the years. Now I spend most of time with ReactJS, NodeJS, Express, and MySQL. They are a newer part of my overall tech stack, but I love their simplicity and their scalability.</p>

        </div>


        <div className="about about-final-section">
          <div className="five-year-text">
            <div className="future-about">
            <h3 className="about-subheader">My ideal position</h3>
              <hr className="horizontal"></hr>
              <br></br>             
              <p>A full stack developer that focuses on Ruby on Rails or ReactJS/NodeJS. I love both and would love an opportunity to make some great features and learn from an experienced team.</p>
            </div>

            <br></br>
            <div className="future-about">
              <h3 className="about-subheader">Five years from now</h3>
              <hr></hr>
              <br></br>
              <p>I feel like having a vision is very important. In 5 years, I can see myself coding some amazing projects and making a difference in the lives of my customers.</p>
            </div>


          </div>
          <br></br>

        </div>

        <div className='about'>
          <p className="closing-line">If you like what you're reading so far, click on the <a href='/LinkPage'>links page</a> and shoot me an email. I'd love to talk to you about my projects in depth.</p>
        </div>




  
      </>
    );
  }