import React from 'react';
import { Calendar, Book, FileText, SkipForward } from 'lucide-react';
import { getThemeColor, glassCardClass } from '../../utils/themeHelpers';
import { posts } from '../../data/constants';

const ArticleList = ({ darkMode, hue }) => (
  <div className="space-y-6">
    {posts.map(post => (
      <div key={post.id} className={`group ${glassCardClass(darkMode)} p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-4">
            {post.top && (
              <span className="text-xs px-2.5 py-1 rounded-lg font-bold text-white shadow-sm" style={{ backgroundColor: getThemeColor(hue) }}>
                置顶
              </span>
            )}
            <h2 
              className="text-2xl font-bold transition-colors cursor-pointer"
            >
              <span className="bg-gradient-to-r bg-[length:0%_3px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-300 pb-1" style={{ backgroundImage: `linear-gradient(${getThemeColor(hue, 1, 'dark')}, ${getThemeColor(hue, 1, 'dark')})`}}>
                {post.title}
              </span>
            </h2>
        </div>
        
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-1.5"><Calendar size={14}/> {post.date}</span>
          <span className="flex items-center gap-1.5"><Book size={14}/> {post.category}</span>
          <span className="flex items-center gap-1.5"><FileText size={14}/> {post.words} 字</span>
        </div>

        <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {post.summary}
        </p>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100/50 dark:border-gray-700/50">
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${darkMode ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' : 'bg-gray-100/80 text-gray-500 hover:bg-gray-200/80'}`}># {tag}</span>
            ))}
          </div>
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 hover:shadow-lg"
            style={{ backgroundColor: getThemeColor(hue, 1, 'default') }}
          >
             <SkipForward size={16} />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default ArticleList;