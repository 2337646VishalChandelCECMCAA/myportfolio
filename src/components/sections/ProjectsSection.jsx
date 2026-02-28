import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/portfolioData';

function ProjectsSection() {
  return (
    <section className="py-12 sm:py-16" id="projects">
      <div className="container-width">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected projects with reusable architecture and production-focused implementation.</p>

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