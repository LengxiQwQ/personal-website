import React from 'react';
import { Settings } from 'lucide-react';
import { getThemeColor } from '../../utils/themeHelpers';
import { galleryImages } from '../../data/constants';

const GalleryGrid = ({ darkMode, hue }) => (
    <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((img, i) => (
            <div 
              key={img.id} 
              className={`rounded-2xl overflow-hidden shadow-sm aspect-[4/3] relative group cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-md`}
              style={{ backgroundColor: getThemeColor((hue + i * 30) % 360, 0.2) }}
            >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md p-2 rounded-xl translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-sm font-bold block text-center dark:text-white">{img.title}</span>
                    </div>
                </div>
            </div>
        ))}
         <div className={`rounded-2xl border-2 border-dashed flex flex-col gap-2 items-center justify-center aspect-[4/3] hover:border-blue-400 transition-colors cursor-pointer ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
            <Settings size={24} />
            <span className="text-sm font-medium">查看更多</span>
         </div>
    </div>
);

export default GalleryGrid;