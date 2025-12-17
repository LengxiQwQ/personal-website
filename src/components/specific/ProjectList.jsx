import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { getThemeColor, glassCardClass } from '../../utils/themeHelpers';
import { projects } from '../../data/constants';

const ProjectList = ({ darkMode, hue }) => (
  <div className="grid grid-cols-1 gap-6">
    {projects.map(project => (
      <div key={project.id} className={`group ${glassCardClass(darkMode)} p-6 hover:shadow-xl transform hover:-translate-y-1`}>
         <div className="flex flex-col gap-4">
             <div className="flex-1 flex flex-col justify-between">
                 <div>
                     <div className="flex justify-between items-start mb-2">
                         <h3 
                            className="text-xl font-bold transition-none" 
                            style={{ 
                                color: 'inherit',
                                '--hover-color': getThemeColor(hue, 1, 'dark') 
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = getThemeColor(hue, 1, 'dark')}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                         >
                            {project.title}
                         </h3>
                         <div className="flex gap-2">
                             <a href="#" className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'}`}>
                                <Github size={18} />
                             </a>
                             <a href="#" className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'}`}>
                                <ExternalLink size={18} />
                             </a>
                         </div>
                     </div>
                     <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {project.desc}
                     </p>
                 </div>
                 
                 <div className="flex flex-wrap items-center justify-between gap-3">
                     <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className={`text-xs px-2.5 py-1 rounded-md font-medium ${darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-600'}`}>
                                {t}
                            </span>
                        ))}
                     </div>
                     <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
                         <Star size={14} fill="currentColor" /> {project.stars}
                     </div>
                 </div>
             </div>
         </div>
      </div>
    ))}
  </div>
);

export default ProjectList;