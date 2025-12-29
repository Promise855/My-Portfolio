import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

// Use direct URLs for now (or import local images later)
const webProjectImg = 'https://i.ytimg.com/vi/hYv6BM2fWd8/hq720.jpg';
const fintechProjectImg = 'https://cdn.dribbble.com/userupload/34219083/file/original-8b1afd7e489a4526967bde834b174f21.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'Web Application',
      description: 'A responsive web app built with HTML, CSS, and JavaScript.',
      img: webProjectImg,
      link: '#'
    },
    {
      id: 2,
      category: 'fintech',
      title: 'Fintech Prototype',
      description: 'Blockchain-based financial solution prototype.',
      img: fintechProjectImg,
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-2xl font-bold text-secondary text-center relative after:content-[''] after:block after:w-14 after:h-[2px] after:bg-secondary after:mt-1 after:mx-auto mb-10">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
            {['all', 'web', 'fintech'].map((category) => (
                <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-2xl font-bold text-base capitalize transition-all duration-300 ${
                    filter === category
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-gray-700 hover:text-secondary'
                }`}
                >
                {category === 'all' ? 'All' : category}
                </button>
            ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;