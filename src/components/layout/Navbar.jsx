import React, { useState, useEffect, useRef } from 'react';
import { 
  Moon, Sun, Menu, Home, Book, Link as LinkIcon, User, 
  Palette, X, Sparkles, Image as ImageIcon, Check, FolderGit2, Github, Loader2, Plus, ChevronDown 
} from 'lucide-react';
import { getThemeColor } from '../../utils/themeHelpers';
import { DYNAMIC_PRESETS, WALLPAPER_PRESETS, WALLPAPER_REPO_URL, AVATAR_URL } from '../../data/constants';

const NavItem = ({ icon, text, hasDropdown, hue }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="flex items-center gap-1 cursor-pointer group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color: isHovered ? getThemeColor(hue, 1, 'dark') : 'inherit' }}
    >
      {icon}
      <span className="font-medium">{text}</span>
      {hasDropdown && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform" />}
    </div>
  );
};

const Navbar = ({ 
    darkMode, toggleDarkMode, hue, setHue, 
    bgConfig, setBgConfig 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  const [githubWallpapers, setGithubWallpapers] = useState([]);
  const [loadingWallpapers, setLoadingWallpapers] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); 

  const pickerRef = useRef(null);

  useEffect(() => {
    const fetchGithubWallpapers = async () => {
        setLoadingWallpapers(true);
        try {
            const response = await fetch('https://api.github.com/repos/LengxiQwQ/assets/git/trees/main?recursive=1');
            if (response.ok) {
                const data = await response.json();
                if (data.tree) {
                    const images = data.tree
                        .filter(item => 
                            item.path.startsWith('wallpaper/my-site-wallpaper/') && 
                            /\.(jpg|jpeg|png|gif|webp)$/i.test(item.path)
                        )
                        .map(item => ({
                            name: item.path.split('/').pop(), 
                            url: `https://cdn.jsdelivr.net/gh/LengxiQwQ/assets@main/${item.path}`,
                            path: item.path
                        }));
                    setGithubWallpapers(images);
                }
            }
        } catch (error) {
            console.error("Failed to fetch cloud wallpapers:", error);
        } finally {
            setLoadingWallpapers(false);
        }
    };

    fetchGithubWallpapers();
  }, []);

  const handleLoadMore = (e) => {
    e.stopPropagation(); 
    setVisibleCount(prev => prev + 12);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayedGithubWallpapers = githubWallpapers.slice(0, visibleCount);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/60 border-gray-800/50' : 'bg-white/60 border-white/50'} backdrop-blur-md border-b`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div 
                className="relative w-10 h-10 rounded-full p-[2px]"
                style={{ 
                    background: 'conic-gradient(from 0deg, #4285F4 0deg 110deg, #EA4335 110deg 240deg, #FBBC05 240deg 300deg, #34A853 300deg 360deg)'
                }}
            >
                <div className={`w-full h-full rounded-full overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} p-[1.5px] group-hover:rotate-[360deg] transition-transform duration-700`}>
                    <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>
            <span className={`font-bold text-xl tracking-wide font-comic ${darkMode ? 'text-white' : 'text-gray-800'}`}>冷汐OωO</span>
          </div>

          <div className={`hidden md:flex items-center space-x-8 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            <NavItem icon={<Home size={18}/>} text="首页" hue={hue} />
            <NavItem icon={<Book size={18}/>} text="文章" hasDropdown hue={hue} />
            <NavItem icon={<LinkIcon size={18}/>} text="友链" hue={hue} />
            <NavItem icon={<User size={18}/>} text="关于" hue={hue} />
          </div>

          <div className={`hidden md:flex items-center space-x-2 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            <div className="relative" ref={pickerRef}>
              <button 
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="p-2 rounded-full hover:bg-black/5 relative group transition-colors"
                title="个性化设置"
              >
                <Palette size={20} style={{ color: showColorPicker ? getThemeColor(hue, 1, 'dark') : undefined }} />
              </button>
              
              {showColorPicker && (
                <div className="absolute right-0 mt-3 p-5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 w-80 animate-fade-in z-50 max-h-[85vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <Palette size={16}/> 个性化设置
                    </span>
                    <X size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => setShowColorPicker(false)}/>
                  </div>

                  <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-semibold text-gray-500">主题色调 (Hue)</span>
                          <div className="flex items-center gap-2">
                              <span className="text-[10px] text-gray-400 font-mono">#{hue}</span>
                              <span className="w-3 h-3 rounded-full border border-gray-200 dark:border-gray-600" style={{ backgroundColor: getThemeColor(hue) }}></span>
                          </div>
                      </div>
                      <div className="relative h-6 rounded-full overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-700">
                        <div className="absolute inset-0 opacity-30" style={{
                          background: 'linear-gradient(to right, #ffb3b3, #ffffb3, #b3ffb3, #b3ffff, #b3b3ff, #ffb3ff, #ffb3b3)'
                        }}></div>
                        <input 
                          type="range" min="0" max="360" value={hue} 
                          onChange={(e) => setHue(Number(e.target.value))}
                          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div 
                          className="absolute top-0 bottom-0 w-4 bg-white border-2 border-gray-200 rounded-full shadow-md pointer-events-none transition-transform duration-75"
                          style={{ 
                            left: `${(hue / 360) * 100}%`,
                            backgroundColor: getThemeColor(hue, 1, 'dark'),
                            transform: 'translateX(-50%)'
                          }}
                        ></div>
                      </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-gray-700 my-4"></div>

                  <div className="mb-2">
                      <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 mb-3">
                          <Sparkles size={12}/> 动态背景
                      </span>
                      <div className="grid grid-cols-2 gap-3 mb-5">
                          {DYNAMIC_PRESETS.map((bg, idx) => (
                              <div 
                                  key={idx}
                                  onClick={() => setBgConfig({...bgConfig, url: bg.url})}
                                  className={`h-16 rounded-xl cursor-pointer overflow-hidden border-2 relative group transition-all ${
                                      bgConfig.url === bg.url 
                                      ? 'border-blue-500 shadow-md scale-[1.02]' 
                                      : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                                  }`}
                              >   
                                  {bg.url === 'default' ? (
                                      <div className="w-full h-full bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 flex flex-col items-center justify-center relative overflow-hidden">
                                          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-400/20 blur-md"></div>
                                          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-pink-400/20 blur-md"></div>
                                          <span className="text-[10px] text-gray-600 dark:text-gray-300 font-bold relative z-10">{bg.name}</span>
                                          <span className="text-[8px] text-gray-400 dark:text-gray-500 relative z-10">{bg.desc}</span>
                                      </div>
                                  ) : (
                                      <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
                                          <div className="absolute w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-80"></div>
                                          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
                                          <span className="text-[10px] text-white font-bold relative z-10 drop-shadow-md">{bg.name}</span>
                                          <span className="text-[8px] text-white/70 relative z-10">{bg.desc}</span>
                                      </div>
                                  )}
                                  
                                  {bgConfig.url === bg.url && (
                                      <div className="absolute bottom-1.5 right-1.5 bg-blue-500 rounded-full p-[2px] shadow-sm flex items-center justify-center">
                                          <Check size={8} className="text-white" strokeWidth={3} />
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>

                      <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 mb-3">
                          <ImageIcon size={12}/> 精选壁纸
                      </span>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                          {WALLPAPER_PRESETS.map((bg, idx) => (
                              <div 
                                  key={idx}
                                  onClick={() => setBgConfig({...bgConfig, url: bg.url})}
                                  className={`aspect-video rounded-lg cursor-pointer overflow-hidden border-2 relative group transition-all ${
                                      bgConfig.url === bg.url 
                                      ? 'border-blue-500'
                                      : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                                  }`}
                                  title={bg.name}
                              >   
                                  <img src={bg.url} alt={bg.name} className="w-full h-full object-cover" loading="lazy" />
                                  
                                  {bgConfig.url === bg.url && (
                                      <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-[2px] shadow-sm flex items-center justify-center">
                                          <Check size={8} className="text-white" strokeWidth={3} />
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>

                      <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                              <FolderGit2 size={12}/> GitHub 壁纸
                              <a href={WALLPAPER_REPO_URL} target="_blank" rel="noopener noreferrer" title="查看 GitHub 仓库" className="text-gray-400 hover:text-blue-500 ml-1">
                                <Github size={10} />
                              </a>
                          </span>
                          {loadingWallpapers && (
                              <span className="text-[10px] text-gray-400 animate-pulse flex items-center gap-1">
                                  <Loader2 size={10} className="animate-spin"/> 加载中...
                              </span>
                          )}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-2">
                          {displayedGithubWallpapers.length > 0 ? (
                            displayedGithubWallpapers.map((bg, idx) => (
                              <div 
                                  key={idx}
                                  onClick={() => setBgConfig({...bgConfig, url: bg.url})}
                                  className={`aspect-video rounded-lg cursor-pointer overflow-hidden border-2 relative group transition-all ${
                                      bgConfig.url === bg.url 
                                      ? 'border-blue-500'
                                      : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                                  }`}
                                  title={bg.name}
                              >   
                                  <img src={bg.url} alt={bg.name} className="w-full h-full object-cover" loading="lazy" />
                                  
                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <span className="text-[8px] text-white font-medium truncate px-1 max-w-full">{bg.name}</span>
                                  </div>

                                  {bgConfig.url === bg.url && (
                                      <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-[2px] shadow-sm flex items-center justify-center">
                                          <Check size={8} className="text-white" strokeWidth={3} />
                                      </div>
                                  )}
                              </div>
                            ))
                          ) : (
                            !loadingWallpapers && (
                                <div className="col-span-3 text-center py-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                                    <span className="text-[10px] text-gray-400">暂无图片或加载失败</span>
                                </div>
                            )
                          )}
                      </div>
                      
                      {githubWallpapers.length > visibleCount && (
                         <div className="flex justify-center mb-4">
                            <button 
                                onClick={handleLoadMore}
                                className="text-[10px] text-gray-500 hover:text-blue-500 flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full transition-colors"
                            >
                                <Plus size={10} /> 加载更多 ({githubWallpapers.length - visibleCount})
                            </button>
                         </div>
                      )}

                      <div className="mb-4">
                           <label className="text-[10px] text-gray-400 mb-1 block flex items-center gap-1"><LinkIcon size={10}/> 自定义链接</label>
                           <input 
                               type="text" 
                               value={bgConfig.url !== 'default' && bgConfig.url !== 'siri' && !WALLPAPER_PRESETS.find(p => p.url === bgConfig.url) && !githubWallpapers.find(p => p.url === bgConfig.url) ? bgConfig.url : ''}
                               onChange={(e) => setBgConfig({...bgConfig, url: e.target.value})}
                               placeholder="https://example.com/image.jpg"
                               className="w-full text-xs p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-shadow"
                           />
                      </div>

                      <div className="mb-3">
                          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                              <span>背景模糊</span>
                              <span>{bgConfig.blur}px</span>
                          </div>
                          <input 
                              type="range" min="0" max="20" step="1"
                              value={bgConfig.blur}
                              onChange={(e) => setBgConfig({...bgConfig, blur: Number(e.target.value)})}
                              className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                      </div>

                      <div>
                          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                              <span>背景遮罩</span>
                              <span>{Math.round(bgConfig.opacity * 100)}%</span>
                          </div>
                          <input 
                              type="range" min="0" max="0.95" step="0.05"
                              value={bgConfig.opacity}
                              onChange={(e) => setBgConfig({...bgConfig, opacity: Number(e.target.value)})}
                              className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                      </div>
                  </div>

                </div>
              )}
            </div>

            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-black/5 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2"><Menu size={24} /></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;