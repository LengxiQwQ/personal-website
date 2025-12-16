import React, { useState, useEffect, useRef } from 'react';
import { 
  Moon, Sun, Menu, Search, Github, Youtube, 
  MessageCircle, Home, Book, Link as LinkIcon, User, 
  MoreHorizontal, ChevronDown, Music, Image as ImageIcon, 
  FileText, Calendar, Clock, BarChart2, Tag, Coffee, 
  Heart, Play, SkipForward, Palette, X, MapPin, GraduationCap,
  Zap, Mail, Copy, Check, Instagram, Gamepad2, ExternalLink, Star, 
  Settings, Sliders, Image as ImgIcon, Upload, Sparkles, Layout, Cloud, FolderGit2, Loader2, Plus,
  Quote, Code, Terminal, BadgeCheck, MessageSquare
} from 'lucide-react';

// --- 全局样式组件 (引入字体) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');
    
    .font-cute {
      font-family: 'ZCOOL KuaiLe', cursive;
    }
  `}</style>
);

// --- 自定义 SVG 图标 ---

const BilibiliIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" version="1.1" fill="currentColor" className={className}>
    <path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 1 1 60.373333 60.373333l-78.037333 77.952L789.333333 256A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.813334L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="8619"></path>
  </svg>
);

const SteamIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" version="1.1" fill="currentColor" className={className}>
    <path d="M656.901154 393.840202m-65.017172 65.017172a91.948166 91.948166 0 1 0 130.034343-130.034344 91.948166 91.948166 0 1 0-130.034343 130.034344Z"></path>
    <path d="M656.424152 222.702963a171.609272 171.609272 0 0 0-171.609272 169.868605l-106.897423 153.588251a114.679227 114.679227 0 0 0-13.310981-0.716745A126.761503 126.761503 0 0 0 299.382665 563.156918L6.848244 445.610711A524.555072 524.555072 0 0 0 2.445381 511.960835a512.984757 512.984757 0 0 0 9.317687 96.965382l227.72018 91.436205A127.990209 127.990209 0 0 0 491.982331 686.027519l164.441821-120.413188a171.50688 171.50688 0 1 0 0-342.911368zM364.606476 767.941252a93.484048 93.484048 0 0 1-83.347224-51.196083c15.563609 6.245922 30.71765 12.389452 46.486043 18.840159a74.848674 74.848674 0 1 0 55.701339-138.946171l-39.318592-15.870786a114.986404 114.986404 0 0 1 20.478434-2.252627 94.303186 94.303186 0 0 1 0 188.503979z m291.817676-258.437829A114.884011 114.884011 0 1 1 771.410555 394.312235a114.781619 114.781619 0 0 1-114.986403 114.679227z"></path>
    <path d="M509.593784 0A511.960835 511.960835 0 0 0 18.725735 366.66635l76.486949 30.71765a430.047101 430.047101 0 1 1 44.540593 333.900857l-110.173972-40.956867A511.960835 511.960835 0 1 0 509.593784 0z"></path>
  </svg>
);

const PixivIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="1.2" y="1.2" width="21.6" height="21.6" rx="4.5" ry="4.5" stroke="currentColor" strokeWidth="1.8" />
    <path fill="currentColor" d="M6.723 5.465h.904a.37.37 0 0 1 .31.17l.752 1.17a6.172 6.172 0 0 1 10.01 4.834 6.172 6.172 0 0 1-9.394 5.265v2.016a.37.37 0 0 1-.37.367H6.724a.37.37 0 0 1-.37-.367V5.834a.37.37 0 0 1 .37-.37m5.804 2.951a3.222 3.222 0 1 0-.002 6.443 3.222 3.222 0 0 0 .002-6.443" />
  </svg>
);

const QQIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" version="1.1" fill="currentColor" className={className}>
    <path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" />
  </svg>
);

// --- 预设背景配置 ---

// 1. 动态背景 (代码生成)
const DYNAMIC_PRESETS = [
    { name: "默认光斑", url: "default", desc: "柔和律动" },
    { name: "炫彩流光", url: "siri", desc: "深色极光" },
];

// 2. 静态图片壁纸 (本地备用)
const WALLPAPER_PRESETS = [
    { name: "像素云朵", url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop" },
    { name: "枫叶", url: "https://w.wallhaven.cc/full/gw/wallhaven-gwwkql.jpg" },
    { name: "Miku", url: "https://w.wallhaven.cc/full/21/wallhaven-21179y.png" },
    { name: "日系街道", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop" },
    { name: "赛博朋克", url: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop" },
];

const AVATAR_URL = "https://cdn.jsdelivr.net/gh/LengxiQwQ/assets/my-site/images-host/vavtar.jpg";
const WALLPAPER_REPO_URL = "https://github.com/LengxiQwQ/assets/tree/main/wallpaper/my-site-wallpaper";

const SOCIAL_LINKS = [
    { name: "Github", href: "https://github.com/LengxiQwQ", icon: <Github />, color: "#333" },
    { name: "Bilibili", href: "https://space.bilibili.com/477811145", icon: <BilibiliIcon />, color: "#FB7299", sizeOffset: 2 },
    { name: "Youtube", href: "https://www.youtube.com/@lengxiya", icon: <Youtube />, color: "#FF0000", sizeOffset: 2 },
    { name: "Instagram", href: "https://www.instagram.com/zixun0325/#", icon: <Instagram />, color: "#E4405F" },
    { name: "Pixiv", href: "https://www.pixiv.net/users/67452260", icon: <PixivIcon />, color: "#0096FA", sizeOffset: -1 },
    { name: "Steam", href: "https://steamcommunity.com/id/lengxiya/", icon: <SteamIcon />, color: "#171a21" },
];

const galleryImages = [
    { id: 1, title: "夏日祭典", url: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?w=500&auto=format&fit=crop" },
    { id: 2, title: "东京塔", url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=500&auto=format&fit=crop" },
    { id: 3, title: "樱花", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop" },
    { id: 4, title: "猫咪", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop" },
];

const projects = [
  {
    id: 1,
    title: "Mizuki OS (Web版)",
    desc: "一个运行在浏览器里的二次元风格模拟操作系统。支持窗口管理、简单的文件系统和内置小游戏。",
    tech: ["React", "TypeScript", "Vite", "Zustand"],
    stars: 128,
  },
  {
    id: 2,
    title: "Genshin Impact Wiki 小程序",
    desc: "原神资料查询助手，包含角色攻略、圣遗物评分计算器和每日素材提醒功能。",
    tech: ["Vue 3", "Taro", "Node.js"],
    stars: 89,
  },
  {
    id: 3,
    title: "Sakura Music Player",
    desc: "高颜值的在线音乐播放器，支持歌词滚动、频谱可视化和自定义主题。",
    tech: ["Next.js", "Web Audio API", "Tailwind"],
    stars: 256,
  },
  {
    id: 4,
    title: "Live2D 看板娘插件",
    desc: "为你的网站添加可爱的 Live2D 看板娘，支持模型切换、语音互动和动作捕捉。",
    tech: ["PixiJS", "Live2D SDK", "JavaScript"],
    stars: 512,
  }
];

const posts = [
  {
    id: 1,
    title: "Markdown 编写指南与测试",
    date: "2025-01-20",
    category: "教程",
    words: 1700,
    tags: ["Markdown", "写作"],
    summary: "这是一个简单的 Markdown 笔记示例。测试标题、列表、粗体以及代码块的渲染效果...",
    top: true,
  },
  {
    id: 2,
    title: "2024 年度总结：在这纷繁的世界里",
    date: "2024-12-31",
    category: "随笔",
    words: 2300,
    tags: ["生活", "年终总结"],
    summary: "时间过得真快，转眼间一年又过去了。今年发生了很多事情，有开心的也有难过的...",
    top: false,
  },
  {
    id: 3,
    title: "React Hooks 最佳实践解析",
    date: "2024-11-15",
    category: "技术",
    words: 3500,
    tags: ["React", "前端", "代码"],
    summary: "深入探讨 useEffect 和 useMemo 的使用场景，避免常见的闭包陷阱和性能问题。",
    top: false,
  },
];

const musicList = [
  { id: 1, title: "Secret Base ~君がくれたもの~", artist: "Zone", duration: "4:55" },
  { id: 2, title: "Ref:rain", artist: "Aimer", duration: "4:48" },
  { id: 3, title: "打上花火", artist: "DAOKO × 米津玄師", duration: "4:49" },
];



const getThemeColor = (hue, alpha = 1, type = 'default') => {
  if (type === 'dark') return `hsla(${hue}, 60%, 65%, ${alpha})`;
  if (type === 'bg') return `hsla(${hue}, 90%, 90%, ${alpha})`;
  return `hsla(${hue}, 85%, 80%, ${alpha})`;
};

const glassCardClass = (darkMode) => 
  `rounded-3xl shadow-sm transition-all duration-300 border backdrop-blur-md ${
    darkMode 
      ? 'bg-gray-900/60 border-gray-700/50 text-white hover:bg-gray-900/70' 
      : 'bg-white/60 border-white/50 text-gray-800 hover:bg-white/70'
  }`;

// --- 组件 ---

const Typewriter = ({ phrases, hue, darkMode }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <div className="font-cute text-2xl md:text-3xl h-12 flex items-center justify-center tracking-wide">
      {/* 渐变粉色文字，配合奶酪体 */}
      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm pb-1">
        {text}
      </span>
      {/* 圆润的粉色光标 */}
      <span 
        className="ml-1.5 w-1.5 h-6 md:h-8 bg-pink-400 animate-pulse inline-block rounded-full"
      ></span>
    </div>
  );
};

const Navbar = ({ 
    darkMode, toggleDarkMode, hue, setHue, 
    bgConfig, setBgConfig 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  // GitHub 壁纸逻辑
  const [githubWallpapers, setGithubWallpapers] = useState([]);
  const [loadingWallpapers, setLoadingWallpapers] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // 分页控制：初始只显示12张

  const pickerRef = useRef(null);

  // --- 自动读取 GitHub 壁纸逻辑 (递归版) ---
  useEffect(() => {
    const fetchGithubWallpapers = async () => {
        setLoadingWallpapers(true);
        try {
            // 使用 Git Tree API 并开启 recursive=1，这样可以获取所有子文件夹内的文件
            const response = await fetch('https://api.github.com/repos/LengxiQwQ/assets/git/trees/main?recursive=1');
            if (response.ok) {
                const data = await response.json();
                if (data.tree) {
                    // 1. 筛选出路径以 'wallpaper/my-site-wallpaper/' 开头的文件 (更新这里)
                    // 2. 筛选出图片格式
                    const images = data.tree
                        .filter(item => 
                            item.path.startsWith('wallpaper/my-site-wallpaper/') && 
                            /\.(jpg|jpeg|png|gif|webp)$/i.test(item.path)
                        )
                        .map(item => ({
                            // 获取文件名 (去除路径)
                            name: item.path.split('/').pop(), 
                            // 构造 jsDelivr CDN 链接
                            url: `https://cdn.jsdelivr.net/gh/LengxiQwQ/assets@main/${item.path}`,
                            // 记录完整路径作为标识
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
    e.stopPropagation(); // 防止触发关闭
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

  // 当前显示的 GitHub 壁纸切片
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
            
            {/* 统一的个性化设置菜单 */}
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
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <Palette size={16}/> 个性化设置
                    </span>
                    <X size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => setShowColorPicker(false)}/>
                  </div>

                  {/* 1. 主题色调节 */}
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

                  {/* 分割线 */}
                  <div className="border-t border-gray-100 dark:border-gray-700 my-4"></div>

                  {/* 2. 背景设置区域 */}
                  <div className="mb-2">
                      
                      {/* --- 动态背景 Section --- */}
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
                                      // 默认光斑预览
                                      <div className="w-full h-full bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 flex flex-col items-center justify-center relative overflow-hidden">
                                          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-400/20 blur-md"></div>
                                          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-pink-400/20 blur-md"></div>
                                          <span className="text-[10px] text-gray-600 dark:text-gray-300 font-bold relative z-10">{bg.name}</span>
                                          <span className="text-[8px] text-gray-400 dark:text-gray-500 relative z-10">{bg.desc}</span>
                                      </div>
                                  ) : (
                                      // Siri 流光预览
                                      <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
                                          <div className="absolute w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-80"></div>
                                          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
                                          <span className="text-[10px] text-white font-bold relative z-10 drop-shadow-md">{bg.name}</span>
                                          <span className="text-[8px] text-white/70 relative z-10">{bg.desc}</span>
                                      </div>
                                  )}
                                  
                                  {/* 选中标识 */}
                                  {bgConfig.url === bg.url && (
                                      <div className="absolute bottom-1.5 right-1.5 bg-blue-500 rounded-full p-[2px] shadow-sm flex items-center justify-center">
                                          <Check size={8} className="text-white" strokeWidth={3} />
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>

                      {/* --- 精选壁纸 (本地) Section --- */}
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

                      {/* --- GitHub 壁纸 (云端自动) Section --- */}
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
                                  
                                  {/* 悬浮提示名字 */}
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
                      
                      {/* 加载更多按钮 - 性能优化关键 (防止一次性渲染过多DOM) */}
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

                      {/* 自定义 URL */}
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

                      {/* 模糊程度 */}
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

                      {/* 遮罩浓度 */}
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

const Hero = ({ hue, darkMode }) => {
  const handleScrollDown = () => {
    const targetPosition = window.innerHeight - 50;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

    // Typewriter 打字机文本内容 (更新了第一句)
  const typewriterPhrases = [
    "欢迎来到冷汐的小站！(OωO)",
    "Hello World!",
    "你好，我是冷汐！OωO",
    "热爱编程，热爱生活。",
    "今天也要开心鸭 ~",
    "探索数字世界的边界...",
  ];

  return (
    <div className={`relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden`}>
      <div className={`z-10 relative flex flex-col items-center animate-fade-in-up`}>
        {/* 标题调小 */}
        <h1 className={`text-5xl md:text-7xl font-black mb-4 font-comic tracking-tight drop-shadow-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          冷汐<span style={{ color: getThemeColor(hue, 1, 'dark') }}>的小站</span>
        </h1>
        
        {/* 移除了之前的公告块 */}
        
        <div className="mb-10 min-h-[2rem]">
           <Typewriter phrases={typewriterPhrases} hue={hue} darkMode={darkMode} />
        </div>

         <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-110 shadow-sm hover:shadow-md
                    ${darkMode 
                        ? 'bg-gray-800/40 text-gray-300 hover:text-white border border-gray-700/50' 
                        : 'bg-white/40 text-gray-500 hover:text-white border border-white/50'
                    }`}
                  style={{ '--hover-bg': link.color }}
                  onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = link.color;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = link.color;
                  }}
                  onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.borderColor = '';
                  }}
                >
                    {React.cloneElement(link.icon, { size: 20 + (link.sizeOffset || 0), strokeWidth: 2 })}
                </a>
            ))}
         </div>
      </div>

      <div 
        className="absolute bottom-10 animate-bounce opacity-70 cursor-pointer p-4 hover:opacity-100 transition-opacity z-10" 
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center gap-2">
            <span className={`text-xs uppercase tracking-widest font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>向下滚动</span>
            <ChevronDown size={32} className={darkMode ? 'text-white' : 'text-gray-800'} />
        </div>
      </div>
    </div>
  );
};

// --- Radar Chart Component ---
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

// 统一的信息行组件：支持普通展示和点击复制
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
                    {/* 移除 label 显示，只保留值 */}
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

// --- 重构后的个人资料卡片 ---
const ProfileCardPro = ({ darkMode, hue }) => (
  <div className={glassCardClass(darkMode) + " overflow-hidden group/card"}>
    {/* Banner */}
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
      {/* Avatar - 严格左对齐 (确保视觉上和下方文字对齐) */}
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
      
      {/* Name Area with Message Button - 修正对齐和布局 */}
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
              
              {/* 新增的留言按钮 - 填补空缺 */}
              <button 
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              >
                  <MessageSquare size={12} />
                  留言
              </button>
          </div>
          
          {/* 简介 */}
          <div className="mt-3">
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  热衷于探索各种新技术的死宅，梦想是开发出属于自己的开放世界游戏。(´• ω •`)
              </p>
          </div>
      </div>

      {/* Basic Info & Contact List - 移除 Hover 变色 */}
      <div className="flex flex-col gap-1 mb-6 px-0">
          <InfoRow icon={<MapPin size={14} />} value="马来西亚，森美兰州" hue={hue} darkMode={darkMode} />
          <InfoRow icon={<GraduationCap size={14} />} value="在读大学生 · IT" hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Gamepad2 size={14} />} value="感觉没有打游戏的动力了，只想钻研技术" hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Code size={14} />} value="正在钻研：Unity & C#" hue={hue} darkMode={darkMode} />
          
          <div className="my-1 border-t border-dashed border-gray-100 dark:border-gray-800"></div>

          {/* QQ 图标加大到 16px */}
          <InfoRow icon={<QQIcon size={16} />} value="3197635836" isCopyable={true} hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Mail size={14} />} value="date200325@gmail.com" isCopyable={true} hue={hue} darkMode={darkMode} />
      </div>

      {/* Social Media - 居中对齐 */}
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

      {/* Skills Radar - 标题左对齐统一风格 */}
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
)

// --- 主程序 ---

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

      {/* 全局背景处理 - 完全恢复为原来的版本，不再使用性能优化版本 */}
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
                {/* 图片层 - 移除 transition 属性以消除延迟感 */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transform scale-105"
                    style={{ 
                        backgroundImage: `url(${bgConfig.url})`,
                        filter: `blur(${bgConfig.blur}px)`
                    }}
                ></div>
                {/* 遮罩层 - 用于保证文字可读性 */}
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
          
          {/* Left Sidebar - Adjusted width to ~25% (slightly wider for better fit) */}
          <div className="w-full lg:w-[25%] flex-shrink-0 space-y-6">
              
              {/* 1. Profile (Updated with Announcement) - First */}
              <ProfileCardPro darkMode={darkMode} hue={hue} />
              
              {/* 2. Tags - Swapped to Second */}
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

              {/* 3. Stats - Swapped to Third */}
              <StatCard darkMode={darkMode} hue={hue} />

              {/* 4. Quote - Bottom */}
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

          {/* Center Main Content - Adjusted width to ~75% (takes remaining space) */}
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