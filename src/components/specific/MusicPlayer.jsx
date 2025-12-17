import React from 'react';
import { Play, Music, SkipForward } from 'lucide-react';
import { getThemeColor, glassCardClass } from '../../utils/themeHelpers';
import { musicList } from '../../data/constants';

const MusicPlayer = ({ darkMode, hue }) => (
  <div className={`${glassCardClass(darkMode)} p-8`}>
    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
       <div className="w-40 h-40 bg-gray-200 rounded-2xl relative overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
             <Play className="text-white fill-current w-12 h-12" />
          </div>
          <div className="w-full h-full flex items-center justify-center animate-pulse-slow" style={{ backgroundColor: getThemeColor(hue, 0.3) }}>
             <Music size={48} style={{ color: getThemeColor(hue, 1, 'dark') }} />
          </div>
       </div>
       <div className="flex-1 w-full text-center md:text-left">
          <h3 className="text-3xl font-bold mb-2">Secret Base</h3>
          <p className="text-gray-400 text-lg mb-6">Zone</p>
          <div className={`w-full h-2 rounded-full mb-2 overflow-hidden cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
             <div className="h-full rounded-full relative" style={{ width: '33%', backgroundColor: getThemeColor(hue) }}>
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
             </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 font-mono">
             <span>01:20</span>
             <span>04:55</span>
          </div>
          
          <div className="flex justify-center md:justify-start gap-6 mt-6">
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><SkipForward className="rotate-180" size={24} fill="currentColor"/></button>
              <button className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform`} style={{ backgroundColor: getThemeColor(hue) }}>
                  <Play size={24} fill="currentColor" className="ml-1" />
              </button>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><SkipForward size={24} fill="currentColor"/></button>
          </div>
       </div>
    </div>

    <div className="space-y-2">
       {musicList.map((song, index) => (
          <div key={song.id} className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50/50'} ${index === 0 ? (darkMode ? 'bg-gray-700/30' : 'bg-gray-50/50') : ''}`}>
             <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-mono w-6" style={{ color: index === 0 ? getThemeColor(hue, 1, 'dark') : undefined }}>{(index + 1).toString().padStart(2, '0')}</span>
                <div>
                   <div className="font-bold text-base">{song.title}</div>
                   <div className="text-xs text-gray-400">{song.artist}</div>
                </div>
             </div>
             <span className="text-sm text-gray-400 font-mono">{song.duration}</span>
          </div>
       ))}
    </div>
  </div>
);

export default MusicPlayer;