import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/portfolioData';

function ProjectsSection() {
  return (
    <section className="section-wrapper" id="projects">
      <div className="container-width">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected projects with technical implementation details, scalable UI architecture, and production-ready workflows.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;