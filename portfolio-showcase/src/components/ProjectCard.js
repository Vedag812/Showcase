import { Calendar } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex items-center text-xs text-gray-300">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(project.date).toLocaleDateString()}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-gray-400">+{project.tags.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;