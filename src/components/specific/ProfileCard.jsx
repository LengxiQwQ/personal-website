import React, { useState } from 'react';
import { Sparkles, Zap, MessageSquare, MapPin, GraduationCap, Gamepad2, Code, Mail, Check, BadgeCheck } from 'lucide-react';
import { getThemeColor, glassCardClass } from '../../utils/themeHelpers';
import { AVATAR_URL, SOCIAL_LINKS } from '../../data/constants';
import { QQIcon } from '../icons/CustomIcons';

const RadarChart = ({ hue, darkMode }) => {
  const stats = [
    { label: '编程', value: 80 },
    { label: '音乐', value: 70 },
    { label: '绘画', value: 60 },
    { label: '设计', value: 75 },
    { label: '摄影', value: 65 },
  ];
  const size = 200;
  const center = size / 2;
  const radius = 70;
  const angleSlice = (Math.PI * 2) / stats.length;
  const points = stats.map((stat, i) => {
    const angle = i * angleSlice - Math.PI / 2;
    const r = (stat.value / 100) * radius;
    return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
  }).join(' ');
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

  return (
    <div className="flex flex-col items-center">
       <div className="relative w-full aspect-square max-w-[200px] flex items-center justify-center">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
          {gridLevels.map((level, idx) => (
             <polygon
               key={idx}
               points={stats.map((_, i) => {
                 const angle = i * angleSlice - Math.PI / 2;
                 const r = level * radius;
                 return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
               }).join(' ')}
               fill="none"
               stroke={darkMode ? '#4b5563' : '#e5e7eb'}
               strokeWidth="1"
             />
          ))}
          {stats.map((_, i) => {
             const angle = i * angleSlice - Math.PI / 2;
             return (
               <line
                 key={i}
                 x1={center} y1={center}
                 x2={center + radius * Math.cos(angle)}
                 y2={center + radius * Math.sin(angle)}
                 stroke={darkMode ? '#4b5563' : '#e5e7eb'}
                 strokeWidth="1"
               />
             )
          })}
          <polygon
            points={points}
            fill={getThemeColor(hue, 0.4)}
            stroke={getThemeColor(hue, 1, 'dark')}
            strokeWidth="2"
          />
          {stats.map((stat, i) => {
             const angle = i * angleSlice - Math.PI / 2;
             const r = radius + 20; 
             const x = center + r * Math.cos(angle);
             const y = center + r * Math.sin(angle);
             return (
               <text
                 key={i}
                 x={x} y={y}
                 textAnchor="middle"
                 dominantBaseline="middle"
                 fill={darkMode ? '#d1d5db' : '#4b5563'}
                 fontSize="12"
                 className="font-bold"
               >
                 {stat.label}
               </text>
             )
          })}
        </svg>
       </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value, isCopyable, hue, darkMode }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        if (!isCopyable) return;
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    const containerClass = `flex items-center justify-between p-2 rounded-lg transition-colors group border border-transparent 
      ${isCopyable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800' : ''}
      ${!isCopyable && darkMode ? 'text-gray-400' : ''}
      ${!isCopyable && !darkMode ? 'text-gray-500' : ''}
    `;

    return (
        <div 
            className={containerClass}
            onClick={handleCopy}
            title={isCopyable ? "点击复制" : ""}
        >
            <div className="flex items-center gap-3 overflow-hidden w-full">
                <div className={`flex-shrink-0 w-6 flex justify-center ${isCopyable ? (darkMode ? 'text-gray-400' : 'text-gray-400') : (darkMode ? 'text-gray-500' : 'text-gray-400')} transition-colors`}>
                   {icon}
                </div>
                <div className="flex flex-col min-w-0">
                    <span className={`text-xs font-medium truncate leading-tight pt-0.5`}>{value}</span>
                </div>
            </div>
            {copied && <Check size={14} className="text-green-500 flex-shrink-0 ml-2 animate-in zoom-in" />}
        </div>
    )
}

const SocialLink = ({ href, icon, color, hue }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md bg-white dark:bg-gray-700 text-gray-500 hover:text-white"
      style={{ '--hover-bg': color || getThemeColor(hue, 1, 'dark') }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg'); e.currentTarget.style.color = 'white'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
    >
        {icon}
    </a>
)

const ProfileCardPro = ({ darkMode, hue }) => (
  <div className={glassCardClass(darkMode) + " overflow-hidden group/card"}>
    <div 
      className="h-32 w-full bg-cover bg-center relative transition-all duration-700 group-hover/card:h-36"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, ${getThemeColor(hue, 0.2)}, ${getThemeColor(hue, 0.8)}), url('https://api.dicebear.com/7.x/shapes/svg?seed=banner')`
      }}
    >
        <div className="absolute top-4 right-4 text-white/90 animate-pulse-slow">
            <Sparkles size={18} />
        </div>
    </div>
    
    <div className="px-5 pb-6 relative">
      <div className="-mt-16 mb-2 flex justify-start relative z-10">
         <div className="relative group/avatar cursor-pointer">
             <div className={`w-24 h-24 rounded-full border-[4px] p-1 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:rotate-2 ${darkMode ? 'border-gray-900 bg-gray-800 shadow-gray-900/50' : 'border-white bg-white/50 backdrop-blur shadow-gray-200'}`}>
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                    <img src={AVATAR_URL} alt="avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover/avatar:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/30 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500"></div>
                </div>
             </div>
             <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-[3px] border-white dark:border-gray-900 rounded-full flex items-center justify-center text-white shadow-sm" title="在线">
                <Zap size={8} fill="currentColor" />
             </div>
         </div>
      </div>
      
      <div className="mb-4">
          <div className="flex justify-between items-start">
              <div>
                  <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        冷汐OωO 
                      </h3>
                      <BadgeCheck size={18} className="text-blue-500" fill="currentColor" color="white" />
                  </div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500">@LengxiQwQ</p>
              </div>
              
              <button 
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              >
                  <MessageSquare size={12} />
                  留言
              </button>
          </div>
          
          <div className="mt-3">
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  热衷于探索各种新技术的死宅，梦想是开发出属于自己的开放世界游戏。(´• ω •`)
              </p>
          </div>
      </div>

      <div className="flex flex-col gap-1 mb-6 px-0">
          <InfoRow icon={<MapPin size={14} />} value="马来西亚，森美兰州" hue={hue} darkMode={darkMode} />
          <InfoRow icon={<GraduationCap size={14} />} value="在读大学生 · IT" hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Gamepad2 size={14} />} value="感觉没有打游戏的动力了，只想钻研技术" hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Code size={14} />} value="正在钻研：Unity & C#" hue={hue} darkMode={darkMode} />
          
          <div className="my-1 border-t border-dashed border-gray-100 dark:border-gray-800"></div>

          <InfoRow icon={<QQIcon size={16} />} value="3197635836" isCopyable={true} hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Mail size={14} />} value="date200325@gmail.com" isCopyable={true} hue={hue} darkMode={darkMode} />
      </div>

      <div className="mb-6 flex justify-center gap-3 flex-wrap">
           {SOCIAL_LINKS.map((link, i) => (
                <SocialLink 
                    key={i}
                    href={link.href}
                    icon={React.cloneElement(link.icon, { size: 16 + (link.sizeOffset || 0), strokeWidth: 2 })}
                    color={link.color}
                    hue={hue}
                />
           ))}
      </div>

      <div className="pt-4 border-t border-dashed border-gray-200 dark:border-gray-700/50">
          <h4 className="font-bold flex items-center gap-2 mb-2 border-l-4 pl-3 text-sm" style={{ borderColor: getThemeColor(hue) }}>
             技能分布
          </h4>
          <div className="transform scale-90 -my-2">
            <RadarChart hue={hue} darkMode={darkMode} />
          </div>
      </div>

    </div>
  </div>
);

export default ProfileCardPro;