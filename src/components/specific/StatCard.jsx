import React from 'react';
import { BarChart2, FileText, Clock, Heart } from 'lucide-react';
import { getThemeColor, glassCardClass } from '../../utils/themeHelpers';

const StatCard = ({ darkMode, hue }) => (
  <div className={`${glassCardClass(darkMode)} p-6`}>
    <h4 className="font-bold flex items-center gap-2 mb-4 border-l-4 pl-3" style={{ borderColor: getThemeColor(hue) }}>
      <BarChart2 size={18} /> 
      站点信息
    </h4>
    <div className="space-y-3 text-sm">
      <div className={`flex justify-between items-center p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'}`}>
        <span className="text-gray-400 flex items-center gap-2"><FileText size={16} className="text-blue-400"/> 文章数目</span>
        <span className="font-mono font-bold">6</span>
      </div>
      <div className={`flex justify-between items-center p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'}`}>
        <span className="text-gray-400 flex items-center gap-2"><Clock size={16} className="text-green-400"/> 运行时间</span>
        <span className="font-mono font-bold">349 天</span>
      </div>
      <div className={`flex justify-between items-center p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'}`}>
        <span className="text-gray-400 flex items-center gap-2"><Heart size={16} className="text-red-400"/> 访问次数</span>
        <span className="font-mono font-bold">1,024</span>
      </div>
    </div>
  </div>
);

export default StatCard;