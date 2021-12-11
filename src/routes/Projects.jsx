import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    return (
      <main>
        <h2 className='project-header'>Projects</h2>
        <div className="project-card-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </main>
    );
  }