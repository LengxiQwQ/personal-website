// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Tag, Coffee, Star, FileText, Music, Image as ImageIcon } from 'lucide-react';

// 引入拆分后的组件
import GlobalStyles from './components/common/GlobalStyles';
import Navbar from './components/layout/Navbar';
import Hero from './components/specific/Hero';
import ProfileCardPro from './components/specific/ProfileCard';
import StatCard from './components/specific/StatCard';
import ProjectList from './components/specific/ProjectList';
import ArticleList from './components/specific/ArticleList';
import MusicPlayer from './components/specific/MusicPlayer';
import GalleryGrid from './components/specific/GalleryGrid';

// 引入工具函数
import { getThemeColor, glassCardClass } from './utils/themeHelpers';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('projects'); 
  const [hue, setHue] = useState(230);
  
  // 背景设置状态
  const [bgConfig, setBgConfig] = useState({
      url: "default",  // 默认使用光斑模式
      blur: 0,  // 高斯模糊像素值
      opacity: 0.5 // 遮罩不透明度 (0-1)
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-pink-200 selection:text-pink-900 ${darkMode ? 'bg-gray-900' : 'bg-[#fdfbf8]'} relative`}>
      
      {/* 注入全局样式 (字体) */}
      <GlobalStyles />

      {/* 全局背景处理 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {bgConfig.url === 'default' ? (
            // 默认光斑模式 (柔和、跟随主题色)
            <>
                <div 
                  className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob opacity-40"
                  style={{ backgroundColor: getThemeColor(hue, 0.4) }}
                ></div>
                <div 
                  className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000 opacity-40"
                  style={{ backgroundColor: getThemeColor((hue + 60) % 360, 0.4) }}
                ></div>
                <div 
                  className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000 opacity-40"
                  style={{ backgroundColor: getThemeColor((hue + 120) % 360, 0.4) }}
                ></div>
            </>
        ) : bgConfig.url === 'siri' ? (
            // Siri/炫彩流光模式 (深色、鲜艳、自动流动)
            <>
                {/* 深色底色 */}
                <div className="absolute inset-0 bg-gray-900"></div>
                {/* 鲜艳的流动光斑 */}
                <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob bg-blue-600 opacity-60"></div>
                <div className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 bg-purple-600 opacity-60"></div>
                <div className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 bg-cyan-600 opacity-60"></div>
                
                {/* 额外的遮罩层增强对比度 */}
                <div className="absolute inset-0 bg-black/20"></div>
            </>
        ) : (
            // 图片背景模式
            <>
                {/* 图片层 */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transform scale-105"
                    style={{ 
                        backgroundImage: `url(${bgConfig.url})`,
                        filter: `blur(${bgConfig.blur}px)`
                    }}
                ></div>
                {/* 遮罩层 */}
                <div 
                    className={`absolute inset-0 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}
                    style={{ opacity: bgConfig.opacity }}
                ></div>
            </>
        )}
      </div>

      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        hue={hue} 
        setHue={setHue}
        bgConfig={bgConfig}
        setBgConfig={setBgConfig} 
      />
      
      <Hero hue={hue} darkMode={darkMode} />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[25%] flex-shrink-0 space-y-6">
              
              <ProfileCardPro darkMode={darkMode} hue={hue} />
              
              <div className={`${glassCardClass(darkMode)} p-6`}>
                <h4 className="font-bold flex items-center gap-2 mb-4">
                  <Tag size={18} className="text-blue-400"/> 兴趣标签
                </h4>
                <div className="flex flex-wrap gap-2">
                   {['React', 'Genshin', 'Music', 'Coding', 'Steam', 'Anime', 'Design', 'Next.js', 'TypeScript'].map(t => (
                       <span 
                        key={t} 
                        className={`text-xs px-3 py-1.5 rounded-lg cursor-pointer transition-all hover:text-white hover:scale-105 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}`}
                        style={{ '--hover-bg': getThemeColor(hue, 1, 'dark') }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = getThemeColor(hue, 1, 'dark')}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                       >
                           {t}
                       </span>
                   ))}
                </div>
              </div>

              <StatCard darkMode={darkMode} hue={hue} />

              <div className={`${glassCardClass(darkMode)} p-6`}>
                <div className="text-center relative">
                    <div className="absolute -top-3 -left-2 text-4xl text-gray-200 dark:text-gray-700 font-serif">"</div>
                    <div className="absolute -bottom-6 -right-2 text-4xl text-gray-200 dark:text-gray-700 font-serif">"</div>
                    <Coffee className="mx-auto mb-4" size={28} style={{ color: getThemeColor(hue, 1, 'dark') }} />
                    <p className="text-sm italic font-serif text-gray-500 leading-loose">
                        生活明朗，万物可爱。<br/>人间值得，未来可期。
                    </p>
                </div>
              </div>
          </div>

          {/* Center Main Content */}
          <div className="w-full lg:w-[75%] flex-grow min-w-0">
            <div className={`rounded-2xl p-2 mb-8 flex items-center shadow-sm overflow-x-auto gap-2 ${darkMode ? 'bg-gray-900/40 border border-gray-700/50' : 'bg-white/40 border border-white/50'} backdrop-blur-md`}>
                {[
                    { id: 'projects', icon: <Star size={18} />, label: '我的项目' },
                    { id: 'articles', icon: <FileText size={18} />, label: '文章列表' },
                    { id: 'music', icon: <Music size={18} />, label: '我的歌单' },
                    { id: 'gallery', icon: <ImageIcon size={18} />, label: '美好瞬间' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-transform duration-300 relative overflow-hidden group whitespace-nowrap
                            ${activeTab === tab.id 
                                ? 'text-white' 
                                : (darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                            }
                        `}
                        style={{ 
                          backgroundColor: activeTab === tab.id ? getThemeColor(hue, 1, 'default') : 'transparent',
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                           {tab.icon} {tab.label}
                        </span>
                        {activeTab !== tab.id && (
                           <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-gray-700/30' : 'bg-white/50'}`}></span>
                        )}
                    </button>
                ))}
            </div>

            <div className="animate-fade-in">
                {activeTab === 'projects' && <ProjectList darkMode={darkMode} hue={hue} />}
                {activeTab === 'articles' && <ArticleList darkMode={darkMode} hue={hue} />}
                {activeTab === 'music' && <MusicPlayer darkMode={darkMode} hue={hue} />}
                {activeTab === 'gallery' && <GalleryGrid darkMode={darkMode} hue={hue} />}
            </div>
          </div>

        </div>
      </main>

      <footer className={`py-12 mt-10 text-center text-sm ${darkMode ? 'bg-gray-900/80 text-gray-500 border-gray-800' : 'bg-white/60 text-gray-400 border-white/50'} border-t backdrop-blur-md relative z-20`}>
          <div className="max-w-7xl mx-auto px-4">
             <p className="mb-2">© 2025 冷汐OωO 版权所有</p>
             <p className="text-xs opacity-60">冷汐OωO 的次元小窝</p>
          </div>
      </footer>
    </div>
  );
}