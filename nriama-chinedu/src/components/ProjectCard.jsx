const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <img 
        src={project.img} 
        alt={project.title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-primary mb-4">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-6">
          {project.description}
        </p>
        <a 
          href={project.link}
          target="_blank"  // Opens in new tab - better UX
          rel="noopener noreferrer"
          className="text-secondary font-bold hover:underline inline-flex items-center gap-2"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;