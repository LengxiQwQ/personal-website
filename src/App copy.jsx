import React, { useState, useEffect, useRef } from 'react';
import { 
  Moon, Sun, Menu, Search, Github, Twitter, Youtube, 
  MessageCircle, Home, Book, Link as LinkIcon, User, 
  MoreHorizontal, ChevronDown, Music, Image as ImageIcon, 
  FileText, Calendar, Clock, BarChart2, Tag, Coffee, 
  Heart, Play, SkipForward, Palette, X, MapPin, GraduationCap,
  Zap, Mail, Copy, Check, Instagram, Gamepad2, Brush, Monitor,
  Camera, Code, ExternalLink, Star, GitFork, ArrowDown, Terminal
} from 'lucide-react';

// --- 自定义 SVG 图标 (使用 1024x1024 视口 或 自定义视口) ---

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

// --- 头像链接 ---
const AVATAR_URL = "https://cdn.jsdelivr.net/gh/LengxiQwQ/assets/my-site/images-host/vavtar.jpg";

// --- 统一的社交链接配置 ---
const SOCIAL_LINKS = [
    { name: "Github", href: "https://github.com/LengxiQwQ", icon: <Github />, color: "#333" },
    { name: "Bilibili", href: "https://space.bilibili.com/477811145", icon: <BilibiliIcon />, color: "#FB7299", sizeOffset: 2 },
    { name: "Youtube", href: "https://www.youtube.com/@lengxiya", icon: <Youtube />, color: "#FF0000", sizeOffset: 2 },
    { name: "Instagram", href: "https://www.instagram.com/zixun0325/#", icon: <Instagram />, color: "#E4405F" },
    // Pixiv
    { name: "Pixiv", href: "https://www.pixiv.net/users/67452260", icon: <PixivIcon />, color: "#0096FA", sizeOffset: -1 },
    // Steam
    { name: "Steam", href: "https://steamcommunity.com/id/lengxiya/", icon: <SteamIcon />, color: "#171a21" },
];

// --- 模拟数据 ---

const projects = [
  {
    id: 1,
    title: "Mizuki OS (Web版)",
    desc: "一个运行在浏览器里的二次元风格模拟操作系统。支持窗口管理、简单的文件系统和内置小游戏。",
    tech: ["React", "TypeScript", "Vite", "Zustand"],
    stars: 128,
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    title: "Genshin Impact Wiki 小程序",
    desc: "原神资料查询助手，包含角色攻略、圣遗物评分计算器和每日素材提醒功能。",
    tech: ["Vue 3", "Taro", "Node.js"],
    stars: 89,
    color: "from-purple-400 to-pink-300"
  },
  {
    id: 3,
    title: "Sakura Music Player",
    desc: "高颜值的在线音乐播放器，支持歌词滚动、频谱可视化和自定义主题。",
    tech: ["Next.js", "Web Audio API", "Tailwind"],
    stars: 256,
    color: "from-pink-400 to-rose-300"
  },
  {
    id: 4,
    title: "Live2D 看板娘插件",
    desc: "为你的网站添加可爱的 Live2D 看板娘，支持模型切换、语音互动和动作捕捉。",
    tech: ["PixiJS", "Live2D SDK", "JavaScript"],
    stars: 512,
    color: "from-green-400 to-emerald-300"
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

const galleryImages = [
  { id: 1, color: "bg-blue-100", title: "夏日的风" },
  { id: 2, color: "bg-pink-100", title: "樱花树下" },
  { id: 3, color: "bg-indigo-100", title: "星空露营" },
  { id: 4, color: "bg-green-100", title: "森林秘境" },
];

// --- 辅助函数：生成 HSL 颜色 ---
const getThemeColor = (hue, alpha = 1, type = 'default') => {
  if (type === 'dark') return `hsla(${hue}, 60%, 65%, ${alpha})`;
  if (type === 'bg') return `hsla(${hue}, 90%, 90%, ${alpha})`;
  return `hsla(${hue}, 85%, 80%, ${alpha})`;
};

// --- 通用毛玻璃卡片样式 ---
const glassCardClass = (darkMode) => 
  `rounded-3xl shadow-sm transition-all duration-300 border backdrop-blur-md ${
    darkMode 
      ? 'bg-gray-900/60 border-gray-700/50 text-white hover:bg-gray-900/70' 
      : 'bg-white/60 border-white/50 text-gray-800 hover:bg-white/70'
  }`;


// --- 打字机组件 ---
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

      // Typing Speed Logic
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end (longer pause)
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <div className="font-mono text-lg md:text-xl h-8 flex items-center justify-center">
      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
        {"> "} {text}
      </span>
      <span 
        className="ml-1 w-2 h-5 bg-current animate-pulse inline-block"
        style={{ color: getThemeColor(hue, 1, 'dark') }}
      ></span>
    </div>
  );
};


// --- 组件 ---

const Navbar = ({ darkMode, toggleDarkMode, hue, setHue }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/60 border-gray-800/50' : 'bg-white/60 border-white/50'} backdrop-blur-md border-b`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            
            {/* 头像 - 使用 conic-gradient 实现 Google One Style 的不均匀硬切分颜色边框 */}
            {/* 外层：负责彩色边框，不旋转 */}
            <div 
                className="relative w-10 h-10 rounded-full p-[2px]"
                style={{ 
                    // Google One 风格：蓝(0-120), 红(120-220), 黄(220-300), 绿(300-360) (近似比例)
                    background: 'conic-gradient(from 45deg, #4285F4 0deg 120deg, #EA4335 120deg 220deg, #FBBC05 220deg 300deg, #34A853 300deg 360deg)'
                }}
            >
                {/* 内部容器：负责旋转头像 */}
                <div className={`w-full h-full rounded-full overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} p-[1.5px] group-hover:rotate-[360deg] transition-transform duration-700`}>
                    <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>

            {/* 汉化：导航栏名字 */}
            <span className={`font-bold text-xl tracking-wide font-comic ${darkMode ? 'text-white' : 'text-gray-800'}`}>冷汐OωO</span>
          </div>

          <div className={`hidden md:flex items-center space-x-8 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            <NavItem icon={<Home size={18}/>} text="首页" hue={hue} />
            <NavItem icon={<Book size={18}/>} text="文章" hasDropdown hue={hue} />
            <NavItem icon={<LinkIcon size={18}/>} text="友链" hue={hue} />
            <NavItem icon={<User size={18}/>} text="关于" hue={hue} />
            <NavItem icon={<MoreHorizontal size={18}/>} text="其他" hasDropdown hue={hue} />
          </div>

          <div className={`hidden md:flex items-center space-x-3 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            <div className="relative" ref={pickerRef}>
              <button 
                onClick={() => setShowColorPicker(!showColorPicker)}
                // Removed transition-colors to allow instant color update
                className="p-2 rounded-full hover:bg-black/5 relative group"
                title="切换主题色"
              >
                <Palette size={20} style={{ color: showColorPicker ? getThemeColor(hue, 1, 'dark') : undefined }} />
                {/* Removed the dot here as requested */}
              </button>
              {showColorPicker && (
                <div className="absolute right-0 mt-3 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 w-64 animate-fade-in z-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-500">主题色调节</span>
                    <X size={14} className="cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => setShowColorPicker(false)}/>
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
                  {/* 新增：显示颜色数值 */}
                  <div className="mt-3 flex justify-between items-center">
                      <span className="text-[10px] text-gray-400 font-mono">HUE: {hue}</span>
                      <span className="w-4 h-4 rounded-full border border-gray-200 dark:border-gray-600" style={{ backgroundColor: getThemeColor(hue) }}></span>
                  </div>
                </div>
              )}
            </div>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-black/5 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <Search size={20} />
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
      // Removed transition-colors to improve responsiveness
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
    // 减去导航栏高度 (约 50px 留出余量)
    const targetPosition = window.innerHeight - 50;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const typewriterPhrases = [
    "Hello World!",
    "你好，我是冷汐！OωO",
    "热爱编程，热爱生活。",
    "今天也要开心鸭 ~",
    "探索数字世界的边界...",
    "经验值正在累积中...",
    "慢慢变强，也慢慢变温柔。",
  ];

  return (
    <div className={`relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden`}>
      
      {/* 居中内容 - 移除卡片容器，回归上一版的全屏布局 */}
      <div className={`z-10 relative flex flex-col items-center animate-fade-in-up`}>
        
        {/* 名字 - 改为 "冷汐的小站" */}
        <h1 className={`text-6xl md:text-8xl font-black mb-6 font-comic tracking-tight drop-shadow-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          冷汐<span style={{ color: getThemeColor(hue, 1, 'dark') }}>的小站</span>
        </h1>
        
        {/* 打字机组件 (保留) */}
        <div className="mb-10 min-h-[2rem]">
           <Typewriter phrases={typewriterPhrases} hue={hue} darkMode={darkMode} />
        </div>

        {/* 社交图标 (保留风格，直接悬浮) */}
         <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // 移除了 hover:-rotate-12，仅保留缩放
                  className={`group w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-110 shadow-sm hover:shadow-md
                    ${darkMode 
                        ? 'bg-gray-800/40 text-gray-300 hover:text-white border border-gray-700/50' 
                        : 'bg-white/40 text-gray-500 hover:text-white border border-white/50'
                    }`}
                  style={{ 
                    '--hover-bg': link.color 
                  }}
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

      {/* Scroll indicator */}
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

  // Calculate points
  const points = stats.map((stat, i) => {
    const angle = i * angleSlice - Math.PI / 2;
    const r = (stat.value / 100) * radius;
    return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
  }).join(' ');

  // Calculate grid points
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

  return (
    <div className="flex flex-col items-center">
       <div className="relative w-full aspect-square max-w-[200px] flex items-center justify-center">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
          {/* Web Grid */}
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
          
          {/* Axes */}
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

          {/* Data Polygon */}
          <polygon
            points={points}
            fill={getThemeColor(hue, 0.4)}
            stroke={getThemeColor(hue, 1, 'dark')}
            strokeWidth="2"
          />

          {/* Labels */}
          {stats.map((stat, i) => {
             const angle = i * angleSlice - Math.PI / 2;
             const r = radius + 20; // Text offset
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

const ContactItem = ({ icon, label, value, hue, darkMode }) => {
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div 
            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors group ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'}`}
            onClick={handleCopy}
            title="点击复制"
        >
            <div className="flex items-center gap-3 overflow-hidden">
                <div className={`p-1.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} group-hover:bg-transparent border border-transparent group-hover:border-current transition-all`}>
                   {icon}
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="text-xs text-gray-400">{label}</span>
                    <span className="text-sm font-medium truncate">{value}</span>
                </div>
            </div>
            <div className="text-gray-400">
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
            </div>
        </div>
    )
}

const SocialLink = ({ href, icon, color, hue }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      // 移除了 hover:-rotate-6，仅保留缩放. Changed transition-all to transition-transform for instant color.
      className="w-9 h-9 flex items-center justify-center rounded-full transition-transform hover:scale-110 shadow-sm hover:shadow-md bg-white dark:bg-gray-700 text-gray-500 hover:text-white"
      style={{ '--hover-bg': color || getThemeColor(hue, 1, 'dark') }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg'); e.currentTarget.style.color = 'white'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
    >
        {icon}
    </a>
)

const ProfileCardPro = ({ darkMode, hue }) => (
  <div className={glassCardClass(darkMode) + " overflow-hidden"}>
    {/* Banner */}
    <div 
      className="h-32 w-full bg-cover bg-center relative"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, ${getThemeColor(hue, 0.2)}, ${getThemeColor(hue, 0.6)}), url('https://api.dicebear.com/7.x/shapes/svg?seed=banner')`
      }}
    >
        <div className="absolute top-4 right-4 text-white/80">
            <MessageCircle size={20} />
        </div>
    </div>
    
    <div className="px-6 pb-6 relative">
      {/* Avatar */}
      <div className="-mt-16 mb-4 flex justify-between items-end">
         <div className="relative">
             <div className={`w-28 h-28 rounded-full border-4 p-1 ${darkMode ? 'border-gray-800 bg-gray-800' : 'border-white bg-white/50 backdrop-blur'}`}>
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={AVATAR_URL} alt="avatar" className="w-full h-full object-cover" />
                </div>
             </div>
             {/* Status Badge */}
             <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center text-[10px] text-white" title="在线">
                <Zap size={12} fill="currentColor" />
             </div>
         </div>
         <button 
           // Removed transition-all to fix color lag, use transition-transform
           className="px-6 py-2 rounded-full text-white font-bold transition-transform active:scale-95 shadow-md hover:shadow-lg text-sm mb-2"
           style={{ backgroundColor: getThemeColor(hue, 1, 'default') }}
         >
           {/* 汉化：关注 */}
           关注
         </button>
      </div>
      
      {/* Name & Bio */}
      <div className="mb-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            冷汐OωO 
            <span className="text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-600 font-normal text-gray-400">Lv.99</span>
          </h3>
          <p className="text-sm text-gray-400 mb-1">@LengxiQwQ</p>
          <div className="text-sm mt-3 leading-relaxed opacity-90">
             喜欢二次元 / 编程萌新 / 梦想是开发一款独立游戏 / 偶尔画画 / 长期潜水
          </div>
      </div>

      {/* Info Grid - 汉化 */}
      <div className="grid grid-cols-1 gap-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
             <MapPin size={16} /> <span>马来西亚，森美兰州</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
             <GraduationCap size={16} /> <span>在读大学生</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
             <GameController size={16} /> <span>状态：在找 MC 好友</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
             <Book size={16} /> <span>正在学习：Unity</span>
          </div>
      </div>

      {/* Spider Chart - 汉化 */}
      <div className="mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center">技能分布</h4>
          <RadarChart hue={hue} darkMode={darkMode} />
      </div>

      {/* Social Links Matrix (使用统一配置) - 汉化标题 */}
      <div className="mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
           <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">社交媒体</h4>
           {/* 修改为 Flex 布局 + justify-between，并限制宽度，确保整齐排列且不换行 */}
           <div className="flex justify-between items-center px-1">
               {SOCIAL_LINKS.map((link, i) => (
                    <SocialLink 
                        key={i}
                        href={link.href}
                        icon={React.cloneElement(link.icon, { size: 18 + (link.sizeOffset || 0), strokeWidth: 2 })}
                        color={link.color}
                        hue={hue}
                    />
               ))}
           </div>
      </div>

      {/* Contact (Copy) */}
      <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-700">
          <ContactItem 
              icon={<MessageCircle size={16}/>} 
              label="QQ" 
              value="3197635836" 
              hue={hue} darkMode={darkMode}
          />
          <ContactItem 
              icon={<Mail size={16}/>} 
              label="Email" 
              value="date200325@gmail.com" 
              hue={hue} darkMode={darkMode}
          />
      </div>

    </div>
  </div>
);

// Helper for Info Grid
const GameController = ({size, className}) => <Gamepad2 size={size} className={className} />


const AnnouncementCard = ({ darkMode, hue }) => (
  <div 
    className={`${glassCardClass(darkMode)} p-5 mb-6 border-l-4`}
    style={{ borderLeftColor: getThemeColor(hue, 0.8) }}
  >
    <h4 className="font-bold flex items-center gap-2 mb-2">
      <MessageCircle size={18} style={{ color: getThemeColor(hue, 1, 'dark') }} />
      个人公告
    </h4>
    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      欢迎来到冷汐的小站！(OωO) <br/>
      这里没有什么高深的技术博客，只有一些日常的碎碎念和喜欢的二次元分享。
    </p>
  </div>
);

const StatCard = ({ darkMode, hue }) => (
  <div className={`${glassCardClass(darkMode)} p-6 mb-6`}>
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

const CalendarCard = ({ darkMode, hue }) => (
  <div className={`${glassCardClass(darkMode)} p-6 mb-6`}>
    <h4 className="font-bold flex items-center gap-2 mb-4 border-l-4 pl-3" style={{ borderColor: getThemeColor(hue) }}>
      <Calendar size={18} />
      {/* 汉化：年月 */}
      2025年 12月
    </h4>
    <div className="grid grid-cols-7 gap-2 text-center text-xs">
      {/* 汉化：星期 */}
      <span className="text-gray-400 font-bold">一</span><span className="text-gray-400 font-bold">二</span><span className="text-gray-400 font-bold">三</span>
      <span className="text-gray-400 font-bold">四</span><span className="text-gray-400 font-bold">五</span><span className="text-gray-400 font-bold">六</span>
      <span className="text-gray-400 font-bold">日</span>
      
      {[...Array(31)].map((_, i) => {
        const isToday = i + 1 === 15;
        return (
          <div 
            key={i} 
            // Removed transition-all to allow instant color change for today item
            className={`aspect-square flex items-center justify-center rounded-lg transition-transform cursor-pointer ${!isToday ? (darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50') : 'font-bold text-white shadow-md transform scale-110'}`}
            style={{ backgroundColor: isToday ? getThemeColor(hue) : undefined }}
          >
            {i + 1}
          </div>
        )
      })}
    </div>
  </div>
);

const ProjectList = ({ darkMode, hue }) => (
  <div className="grid grid-cols-1 gap-6">
    {projects.map(project => (
      <div key={project.id} className={`group ${glassCardClass(darkMode)} p-6 hover:shadow-xl transform hover:-translate-y-1`}>
         <div className="flex flex-col gap-4">
             {/* Thumbnail Removed */}
             
             <div className="flex-1 flex flex-col justify-between">
                 <div>
                     <div className="flex justify-between items-start mb-2">
                         {/* 修复：使用 style 动态改变颜色，而不是 bg-clip-text，防止文字消失 */}
                         <h3 
                            // Removed transition-colors to allow instant color change
                            className="text-xl font-bold transition-none" 
                            style={{ 
                                color: 'inherit',
                                // 使用 CSS 变量在 hover 时改变颜色
                                '--hover-color': getThemeColor(hue, 1, 'dark') 
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = getThemeColor(hue, 1, 'dark')}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                         >
                            {project.title}
                         </h3>
                         <div className="flex gap-2">
                             {/* 修复深色模式下的对比度 */}
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
              // 汉化：TOP -> 置顶
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
            // Removed transition-all, changed to transition-transform
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
                    <ImageIcon size={32} style={{ color: getThemeColor(hue, 0.5, 'dark') }} className="opacity-50" />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md p-2 rounded-xl translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-sm font-bold block text-center dark:text-white">{img.title}</span>
                    </div>
                </div>
            </div>
        ))}
         <div className={`rounded-2xl border-2 border-dashed flex flex-col gap-2 items-center justify-center aspect-[4/3] hover:border-blue-400 transition-colors cursor-pointer ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
            <Camera size={24} />
            {/* 汉化：查看更多 */}
            <span className="text-sm font-medium">查看更多</span>
         </div>
    </div>
)

// --- 主程序 ---

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('projects'); 
  // 默认主题色改为 230 (微微蓝色/紫色)
  const [hue, setHue] = useState(230); 

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
      
      {/* 全局动态背景 - 现在它是固定的，覆盖整个页面 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob opacity-30"
          style={{ backgroundColor: getThemeColor(hue, 0.4) }}
        ></div>
        <div 
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000 opacity-30"
          style={{ backgroundColor: getThemeColor((hue + 60) % 360, 0.4) }}
        ></div>
        <div 
          className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000 opacity-30"
          style={{ backgroundColor: getThemeColor((hue + 120) % 360, 0.4) }}
        ></div>
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} hue={hue} setHue={setHue} />
      
      <Hero hue={hue} darkMode={darkMode} />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar (收窄为 24%) */}
          <div className="w-full lg:w-[24%] flex-shrink-0 space-y-6">
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
          </div>

          {/* Center Main Content (加宽为 52%) */}
          <div className="w-full lg:w-[52%] flex-grow min-w-0">
            {/* Content Tabs Navigation - 增加间距 */}
            <div className={`rounded-2xl p-2 mb-8 flex items-center shadow-sm overflow-x-auto gap-2 ${darkMode ? 'bg-gray-900/40 border border-gray-700/50' : 'bg-white/40 border border-white/50'} backdrop-blur-md`}>
                {[
                    { id: 'projects', icon: <Code size={18} />, label: '我的项目' },
                    { id: 'articles', icon: <FileText size={18} />, label: '文章列表' },
                    { id: 'music', icon: <Music size={18} />, label: '我的歌单' },
                    { id: 'gallery', icon: <ImageIcon size={18} />, label: '美好瞬间' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        // Removed transition-all to allow instant color changes, keep duration-300 for non-color properties if any, but better to remove all transition on color affecting props.
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

          {/* Right Sidebar (收窄为 24%) */}
          <div className="w-full lg:w-[24%] flex-shrink-0 space-y-6">
             <AnnouncementCard darkMode={darkMode} hue={hue} />
             <StatCard darkMode={darkMode} hue={hue} />
             <CalendarCard darkMode={darkMode} hue={hue} />
             
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

        </div>
      </main>

      <footer className={`py-12 mt-10 text-center text-sm ${darkMode ? 'bg-gray-900/80 text-gray-500 border-gray-800' : 'bg-white/60 text-gray-400 border-white/50'} border-t backdrop-blur-md relative z-20`}>
          <div className="max-w-7xl mx-auto px-4">
             {/* 汉化：页脚 */}
             <p className="mb-2">© 2025 冷汐OωO 版权所有</p>
             <p className="text-xs opacity-60">冷汐OωO 的次元小窝</p>
          </div>
      </footer>
    </div>
  );
}