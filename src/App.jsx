import React, { useState, useEffect, useRef } from 'react';
import { 
  Moon, Sun, Menu, Search, Github, Youtube, 
  Home, Book, Link as LinkIcon, User, 
  ChevronDown, Image as ImageIcon, 
  FileText, Calendar, Clock, BarChart2, Tag, Coffee, 
  Heart, SkipForward, Palette, X, MapPin, GraduationCap,
  Zap, Mail, Check, Instagram, Gamepad2, Star, 
  Settings, Sparkles, Layout, FolderGit2, Loader2, Plus,
  Code, Terminal, BadgeCheck, Camera, BookOpen, GitFork, Scale, Timer, AlertTriangle, Languages, Mail as MailIcon, Copy
} from 'lucide-react';

// --- Hook: Load marked.js dynamically ---
const useMarked = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (window.marked) {
      setLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
  }, []);
  return loaded;
};

// --- Global Styles ---
const GlobalStyles = ({ hue, darkMode }) => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
    
    html {
      overflow-y: scroll; 
      scrollbar-gutter: stable;
    }

    body {
      font-family: 'Nunito', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      overscroll-behavior-y: none;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-content {
      animation: fadeIn 0.4s ease-out forwards;
    }
    
    .animate-blob {
      animation: blob 7s infinite;
      will-change: transform;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    /* --- Markdown Styles --- */
    .markdown-body h1 { font-size: 2.2em; font-weight: 800; margin-bottom: 0.8em; border-bottom: none; line-height: 1.2; margin-top: 0; }
    .markdown-body h2 { font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em; margin-top: 1.5em; padding-bottom: 0.3em; border-bottom: 1px solid rgba(128,128,128,0.1); }
    .markdown-body h3 { font-size: 1.25em; font-weight: bold; margin-bottom: 0.5em; margin-top: 1.2em; }
    .markdown-body p { margin-bottom: 1.2em; line-height: 1.8; }
    .markdown-body ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1em; }
    .markdown-body ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1em; }
    .markdown-body li { margin-bottom: 0.3em; }
    .markdown-body a { color: ${darkMode ? '#60a5fa' : '#3b82f6'}; text-decoration: none; border-bottom: 1px dashed transparent; transition: border-color 0.2s; }
    .markdown-body a:hover { text-decoration: none; border-bottom-color: currentColor; }
    .markdown-body blockquote { border-left: 4px solid ${darkMode ? '#3b82f6' : '#60a5fa'}; padding-left: 1em; color: ${darkMode ? '#9ca3af' : '#6b7280'}; margin: 1em 0; background: ${darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.05)'}; padding: 0.8em 1em; border-radius: 0.5em; font-style: italic; }
    .markdown-body code { font-family: monospace; background: ${darkMode ? '#374151' : '#f3f4f6'}; padding: 0.2em 0.4em; border-radius: 0.3em; font-size: 0.9em; color: ${darkMode ? '#f472b6' : '#db2777'}; }
    .markdown-body pre { background: ${darkMode ? '#1f2937' : '#1e293b'}; color: #f3f4f6; padding: 1.2em; border-radius: 0.8em; overflow-x: auto; margin-bottom: 1.5em; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .markdown-body pre code { background: transparent; color: inherit; padding: 0; }
    .markdown-body img { max-width: 100%; border-radius: 0.8em; margin: 1.5em auto; display: block; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .markdown-body hr { height: 1px; background-color: rgba(128,128,128,0.2); border: none; margin: 3em 0; }
    
    /* Scrollbar */
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.5); border-radius: 3px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.8); }
  `}</style>
);

// --- Translation Dictionary ---
const translations = {
  zh: {
    common: {
      name: '冷汐的小站',
      profile_name: '冷汐OωO',
    },
    nav: {
      home: '首页',
      home_station: '冷汐的小站',
      home_nest: '冷汐的次元小窝',
      daily: '日常',
      projects: '项目',
      articles: '文章',
      links: '友链',
      about: '关于'
    },
    hero: {
      scroll_down: '向下滚动'
    },
    profile: {
      role: '在读大学生 · IT',
      location: '马来西亚，森美兰州',
      status: '暂时放弃游戏主线任务，转为狂刷技术副本',
      learning: '正在钻研：Unity & C#',
      bio: '在技术与游戏之间反复横跳，梦想是打造自由度拉满的开放世界(´• ω •`)',
      message: '留言', 
      skills: '技能分布',
      online: '在线'
    },
    radar: {
      coding: '编程',
      music: '音乐',
      art: '绘画',
      design: '设计',
      photo: '摄影'
    },
    stats: {
      title: '站点信息',
      articles: '文章数目',
      runtime: '运行天数', 
      visits: '访问次数',
      days: '' 
    },
    home: {
      welcome_title: '👋 嗨，很高兴遇见你！',
      welcome_text: '这里是冷汐的个人小站。在这里，你可以看到我捣鼓的各种项目、平时写的碎碎念，以及我喜欢的音乐和照片。\n希望你能在这里找到一点有趣的东西。如果有任何想法，欢迎在“关于”页面找到联系方式与我交流！',
      tags_title: '兴趣标签',
      rec_project: '推荐项目',
      latest_article: '最新文章',
      view_more: '查看更多'
    },
    daily: {
      gallery_title: '美好瞬间',
      gallery_desc: '记录生活中的点点滴滴',
      empty: '暂时还没有照片哦，以后再来吧~ (´• ω •`)'
    },
    projects: {
      title: '我的项目库',
      desc: '从 GitHub 自动同步的开源项目列表'
    },
    articles: {
      title: '文章列表',
      empty: '博主正在努力码字中... ✍️'
    },
    github_reader: {
      loading_repos: '正在从 GitHub 获取项目...',
      select_repo: '👈 请从左侧选择一个项目查看详情',
      no_readme: '暂无说明文档',
      view_source: '源码',
      words: '字',
      reading_time: '分钟阅读',
      license: '协议',
      forks: 'Forks',
      published: '发布于',
      updated: '更新于',
      rate_limit: 'API 请求次数超限',
      rate_limit_desc: 'GitHub API 访问受限。请稍后再试。'
    },
    links: {
      title: '友情链接',
      desc: '欢迎交换友链，一起在这个互联网角落发光发热 ✨',
      apply: '申请友链',
      email_copied: '邮箱已复制到剪贴板！',
      click_to_email: '点击复制邮箱 & 发送'
    },
    about: {
      title: '关于本站',
      intro: '本站是一个基于现代前端技术栈构建的个人展示空间。设计上追求极简与美观的平衡，交互上注重流畅与响应式体验。\n无论是代码的编写还是界面的打磨，都倾注了对技术的热爱。',
      tech_stack: '技术栈',
      features: '设计特性',
      version: '当前版本：v2.5.7 (Final Polish)'
    },
    settings: {
      title: '个性化设置',
      theme_hue: '主题色调',
      dynamic_bg: '动态背景',
      wallpaper: '精选壁纸',
      github_wallpaper: 'GitHub 壁纸',
      custom_link: '自定义链接',
      blur: '背景模糊',
      mask: '背景遮罩',
      loading: '加载中...'
    },
    footer: {
      copyright: '© 2025 冷汐OωO 版权所有',
      motto: '冷汐OωO 的次元小窝'
    }
  },
  en: {
    common: {
      name: 'Lengxi\'s Site',
      profile_name: 'LengxiOωO',
    },
    nav: {
      home: 'Home',
      home_station: 'Lengxi\'s Site',
      home_nest: 'Dimensional Nest',
      daily: 'Daily',
      projects: 'Projects',
      articles: 'Blog',
      links: 'Links',
      about: 'About'
    },
    hero: {
      scroll_down: 'Scroll Down'
    },
    profile: {
      role: 'Student · IT Major',
      location: 'Negeri Sembilan, Malaysia',
      status: 'Paused main quest, grinding tech dungeons.',
      learning: 'Learning: Unity & C#',
      bio: 'Bouncing between tech and games, dreaming of building a high-freedom open world (´• ω •`)',
      message: 'Message',
      skills: 'Skills',
      online: 'Online'
    },
    radar: {
      coding: 'Coding',
      music: 'Music',
      art: 'Art',
      design: 'Design',
      photo: 'Photo'
    },
    stats: {
      title: 'Site Info',
      articles: 'Articles',
      runtime: 'Run Days',
      visits: 'Visits',
      days: ''
    },
    home: {
      welcome_title: '👋 Hi, Nice to meet you!',
      welcome_text: 'Welcome to Lengxi\'s personal space. Here you can find my projects, random thoughts, and moments from my life.\nHope you find something interesting here. Feel free to contact me via the "About" page!',
      tags_title: 'Tags',
      rec_project: 'Featured Project',
      latest_article: 'Latest Post',
      view_more: 'View More'
    },
    daily: {
      gallery_title: 'Moments',
      gallery_desc: 'Capturing the beauty of life',
      empty: 'No photos yet, come back later~ (´• ω •`)'
    },
    projects: {
      title: 'My Projects',
      desc: 'Open source projects synced from GitHub'
    },
    articles: {
      title: 'All Posts',
      empty: 'Writing in progress... ✍️'
    },
    github_reader: {
      loading_repos: 'Fetching projects from GitHub...',
      select_repo: '👈 Select a project from the left',
      no_readme: 'No README found',
      view_source: 'Source',
      words: 'words',
      reading_time: 'min read',
      license: 'License',
      forks: 'Forks',
      published: 'Published',
      updated: 'Updated',
      rate_limit: 'API Rate Limit Exceeded',
      rate_limit_desc: 'GitHub API access limited. Please try again later.'
    },
    links: {
      title: 'Friend Links',
      desc: 'Let\'s connect and shine together in this corner of the internet ✨',
      apply: 'Apply Link',
      email_copied: 'Email copied to clipboard!',
      click_to_email: 'Click to Copy & Email'
    },
    about: {
      title: 'About This Site',
      intro: 'This site is built with a modern frontend stack, aiming for a balance between minimalism and aesthetics.\nBoth the code and the interface design reflect my passion for technology.',
      tech_stack: 'Tech Stack',
      features: 'Features',
      version: 'Current Version: v2.5.7 (Final Polish)'
    },
    settings: {
      title: 'Personalization',
      theme_hue: 'Theme Hue',
      dynamic_bg: 'Dynamic BG',
      wallpaper: 'Wallpapers',
      github_wallpaper: 'GitHub Wallpapers',
      custom_link: 'Custom URL',
      blur: 'Blur',
      mask: 'Mask',
      loading: 'Loading...'
    },
    footer: {
      copyright: '© 2025 LengxiOωO All Rights Reserved',
      motto: 'LengxiOωO\'s Dimensional Nest'
    }
  }
};

// --- Icon Components ---
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

// --- Data ---
const DYNAMIC_PRESETS = [
    { name: "默认光斑", url: "default", desc: "柔和律动" },
    { name: "炫彩流光", url: "siri", desc: "深色极光" },
];

const WALLPAPER_PRESETS = [
    { name: "默认背景", url: "https://pub-5849e6e3311b4fd2ad74b7054322a4ac.r2.dev/wallpaper/my-site-wallpaper/25a4216317816d0cebf0ab3a67f18e08-tuya.jpg" },
    { name: "涂鸦背景", url: "https://pub-5849e6e3311b4fd2ad74b7054322a4ac.r2.dev/wallpaper/my-site-wallpaper/76fcf387d44c423a12b36d875299220e-tuya.png" },
    { name: "儿童节", url: "https://pub-5849e6e3311b4fd2ad74b7054322a4ac.r2.dev/wallpaper/my-site-wallpaper/%E5%84%BF%E7%AB%A5%E8%8A%82.png" },
    { name: "菲米莉丝", url: "https://pub-5849e6e3311b4fd2ad74b7054322a4ac.r2.dev/wallpaper/my-site-wallpaper/%E8%8F%B2%E7%B1%B3%E8%8E%89%E4%B8%9D-tuya.png" },
];

const AVATAR_URL = "https://pub-5849e6e3311b4fd2ad74b7054322a4ac.r2.dev/avatar/20230327215624_f83de.jpg";

const SOCIAL_LINKS = [
    { name: "Github", href: "https://github.com/LengxiQwQ", icon: <Github />, color: "#333" },
    { name: "Bilibili", href: "https://space.bilibili.com/477811145", icon: <BilibiliIcon />, color: "#FB7299", sizeOffset: 2 },
    { name: "Youtube", href: "https://www.youtube.com/@lengxiya", icon: <Youtube />, color: "#FF0000", sizeOffset: 2 },
    { name: "Instagram", href: "https://www.instagram.com/zixun0325/#", icon: <Instagram />, color: "#E4405F" },
    { name: "Pixiv", href: "https://www.pixiv.net/users/67452260", icon: <PixivIcon />, color: "#0096FA", sizeOffset: -1 },
    { name: "Steam", href: "https://steamcommunity.com/id/lengxiya/", icon: <SteamIcon />, color: "#171a21" },
];

// Content Cleared
const galleryImages = [];
const posts = [];
const friendLinks = []; 

// --- Helper Functions ---
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

// --- Components ---

const Typewriter = ({ phrases, hue, darkMode }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
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
    <div className="font-bold text-2xl md:text-3xl h-12 flex items-center justify-center tracking-wide">
      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm pb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
        {text}
      </span>
      <span className="ml-1.5 w-1.5 h-6 md:h-8 bg-pink-400 animate-pulse inline-block rounded-full"></span>
    </div>
  );
};

const Hero = ({ hue, darkMode, t }) => {
  const handleScrollDown = () => {
    const navbarOffset = 80;
    const targetPosition = window.innerHeight - navbarOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const typewriterPhrases = [
    "欢迎来到冷汐的小站！(OωO)",
    "Hello World!",
    "你好，我是冷汐！OωO",
    "热爱编程，热爱生活。",
    "今天也要开心鸭 ~",
    "探索数字世界的边界...",
  ];

  return (
    <div className={`relative h-[100svh] w-full flex flex-col justify-end items-center text-center px-4 overflow-hidden mb-8 pb-32`}>
      <div className={`z-10 relative flex flex-col items-center animate-fade-in-up`}> 
        <div className="mb-10 min-h-[3rem] flex items-center">
           <Typewriter phrases={typewriterPhrases} hue={hue} darkMode={darkMode} />
        </div>
      </div>
        
      <div 
        className="absolute bottom-10 animate-bounce opacity-70 cursor-pointer p-4 hover:opacity-100 transition-opacity z-10" 
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center gap-2">
            <span className={`text-xs uppercase tracking-widest font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('hero.scroll_down')}</span>
            <ChevronDown size={32} className={darkMode ? 'text-white' : 'text-gray-800'} />
        </div>
      </div>
    </div>
  );
};

const RadarChart = ({ hue, darkMode, t }) => {
  const stats = [
    { label: t('radar.coding'), value: 65 }, 
    { label: t('radar.music'), value: 75 }, 
    { label: t('radar.art'), value: 60 },
    { label: t('radar.design'), value: 50 }, 
    { label: t('radar.photo'), value: 55 }, 
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

    let textColorClass = '';
    if (isCopyable) {
        textColorClass = darkMode ? 'text-gray-400' : 'text-gray-600';
    } else {
        textColorClass = darkMode ? 'text-gray-400' : 'text-gray-500';
    }

    const containerClass = `flex items-center justify-between p-2 rounded-lg transition-colors group border border-transparent 
      ${textColorClass}
      ${isCopyable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-gray-100' : ''}
    `;

    return (
        <div 
            className={containerClass}
            onClick={handleCopy}
            title={isCopyable ? "点击复制" : ""}
        >
            <div className="flex items-start gap-3 w-full"> 
                <div className={`flex-shrink-0 w-6 flex justify-center mt-0.5 ${isCopyable ? (darkMode ? 'text-gray-400 group-hover:text-gray-100' : 'text-gray-400 group-hover:text-gray-600') : (darkMode ? 'text-gray-500' : 'text-gray-400')} transition-colors`}>
                    {icon}
                </div>
                <div className="flex flex-col min-w-0">
                    <span className={`text-sm font-medium leading-tight whitespace-normal break-words`}>{value}</span> 
                </div>
            </div>
            {copied && <Check size={14} className="text-green-500 flex-shrink-0 ml-2 animate-in zoom-in" />}
        </div>
    )
}

const SocialLink = ({ href, icon, color, hue, darkMode }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md 
        ${darkMode ? 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700' : 'bg-white text-gray-500 hover:text-white'}`}
      style={{ '--hover-bg': color || getThemeColor(hue, 1, 'dark') }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg'); e.currentTarget.style.color = 'white'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
    >
        {icon}
    </a>
)

const ProfileCardPro = ({ darkMode, hue, t }) => (
  <div className={glassCardClass(darkMode) + " overflow-hidden group/card"}>
    <div 
      className="h-32 w-full bg-cover bg-center relative"
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
             <div className={`w-24 h-24 rounded-full border-[4px] p-1 transition-all duration-500 transform hover:scale-110 hover:rotate-2 ${darkMode ? 'border-gray-500 bg-gray-800 shadow-gray-900/50' : 'border-white bg-white/50 backdrop-blur shadow-gray-200'}`}> 
                 <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                     <img src={AVATAR_URL} alt="avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover/avatar:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/30 opacity-0 group-hover:avatar:opacity-100 transition-opacity duration-500"></div>
                 </div>
             </div>
             <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-[3px] border-white dark:border-gray-900 rounded-full flex items-center justify-center text-white shadow-sm" title={t('profile.online')}>
                 <Zap size={8} fill="currentColor" />
             </div>
         </div>
      </div>
      
      <div className="mb-4">
          <div className="flex justify-between items-start">
              <div>
                  <div className="flex items-center gap-2 mb-1">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}> 
                        {t('common.profile_name')}
                      </h3>
                      <BadgeCheck size={18} className="text-blue-500" fill="currentColor" color="white" />
                  </div>
              </div>
          </div>
          
          <div className="mt-3">
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('profile.bio')}
              </p>
          </div>
      </div>

      <div className="flex flex-col gap-1 mb-6 px-0">
          <InfoRow icon={<MapPin size={14} />} value={t('profile.location')} hue={hue} darkMode={darkMode} />
          <InfoRow icon={<GraduationCap size={14} />} value={t('profile.role')} hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Gamepad2 size={14} />} value={t('profile.status')} hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Code size={14} />} value={t('profile.learning')} hue={hue} darkMode={darkMode} />
          
          <div className="my-1 border-t border-dashed border-gray-100 dark:border-gray-800"></div>

          <InfoRow icon={<QQIcon size={16} />} value="3197635836" isCopyable={true} hue={hue} darkMode={darkMode} />
          <InfoRow icon={<Mail size={14} />} value="date200325@gmail.com" isCopyable={true} hue={hue} darkMode={darkMode} />
      </div>

      <div className="mb-6 flex justify-center gap-3 flex-wrap">
            {SOCIAL_LINKS.map((link, i) => (
                 <SocialLink 
                    key={i}
                    href={link.href}
                    icon={React.cloneElement(link.icon, { size: 20 + (link.sizeOffset || 0), strokeWidth: 2 })}
                    color={link.color}
                    hue={hue}
                    darkMode={darkMode}
                 />
            ))}
      </div>

      <div className="pt-4 border-t border-dashed border-gray-200 dark:border-gray-700/50">
          <h4 className="font-bold flex items-center gap-2 mb-2 border-l-4 pl-3 text-sm" style={{ borderColor: getThemeColor(hue) }}>
              {t('profile.skills')}
          </h4>
          <div className="transform scale-90 -my-2">
            <RadarChart hue={hue} darkMode={darkMode} t={t} />
          </div>
      </div>
    </div>
  </div>
);

const StatCard = ({ darkMode, hue, t }) => {
  const [runtimeDays, setRuntimeDays] = useState(0);
  const [visitCount, setVisitCount] = useState(1024);

  useEffect(() => {
    const startDate = new Date('2025-12-15T00:00:00');
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setRuntimeDays(diffDays > 0 ? diffDays : 0);
  }, []);

  useEffect(() => {
      const stored = localStorage.getItem('visitCount');
      let count = stored ? parseInt(stored) : 1024;
      count++;
      localStorage.setItem('visitCount', count.toString());
      setVisitCount(count);
  }, []);

  return (
    <div className={`${glassCardClass(darkMode)} p-6`}>
      <h4 className="font-bold flex items-center gap-2 mb-4 border-l-4 pl-3" style={{ borderColor: getThemeColor(hue) }}>
        <BarChart2 size={18} /> 
        {t('stats.title')}
      </h4>
      <div className="space-y-3 text-sm">
        <div className={`flex justify-between items-center p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'}`}>
          <span className="text-gray-400 flex items-center gap-2"><FileText size={16} className="text-blue-400"/> {t('stats.articles')}</span>
          <span className="font-bold">6</span>
        </div>
        <div className={`flex justify-between items-center p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'}`}>
          <span className="text-gray-400 flex items-center gap-2"><Clock size={16} className="text-green-400"/> {t('stats.runtime')}</span>
          <span className="font-bold">{runtimeDays}</span>
        </div>
        <div className={`flex justify-between items-center p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'}`}>
          <span className="text-gray-400 flex items-center gap-2"><Heart size={16} className="text-red-400"/> {t('stats.visits')}</span>
          <span className="font-bold">{visitCount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

// --- ArticleList ---
const ArticleList = ({ darkMode, hue, lang, t }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
      <Coffee size={48} className="mb-4 text-gray-400" />
      <p className="text-gray-500">{t('articles.empty')}</p>
  </div>
);

// --- GitHub Blog View ---

const GithubBlogView = ({ darkMode, hue, t, lang }) => {
  const GITHUB_USERNAME = 'LengxiQwQ';
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [loadingReadme, setLoadingReadme] = useState(false);
  const [showList, setShowList] = useState(true);
  const [error, setError] = useState(null); 
  const markedLoaded = useMarked();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoadingRepos(true);
        setError(null);
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        
        if (response.status === 403) {
            setError('rate_limit');
            return;
        }

        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sortedData);
        if (window.innerWidth > 768 && sortedData.length > 0) {
           handleSelectRepo(sortedData[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingRepos(false);
      }
    };
    fetchRepos();
  }, []);

  const handleSelectRepo = async (repo) => {
    setSelectedRepo(repo);
    setLoadingReadme(true);
    setMarkdownContent('');
    setError(null);
    if (window.innerWidth < 768) setShowList(false);

    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`);
      if (response.status === 403) {
          setError('rate_limit');
          return;
      }
      if (response.status === 404) {
        setMarkdownContent(`# ${t('github_reader.no_readme')}\n(No README.md found)`);
        return;
      }
      const data = await response.json();
      const decodeContent = (str) => {
        try { return decodeURIComponent(escape(window.atob(str))); } 
        catch (e) { return window.atob(str); }
      };
      setMarkdownContent(decodeContent(data.content));
    } catch (err) {
      setMarkdownContent(`# Error\n${err.message}`);
    } finally {
      setLoadingReadme(false);
    }
  };

  const getHtmlContent = () => {
    if (!markedLoaded || !markdownContent) return '';
    try {
      let processed = markdownContent;
      if (selectedRepo) {
        const rawBaseUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${selectedRepo.name}/${selectedRepo.default_branch}/`;
        processed = processed.replace(/!\[(.*?)\]\((?!http)(.*?)\)/g, (match, alt, url) => {
           const cleanUrl = url.startsWith('./') ? url.slice(2) : url;
           return `![${alt}](${rawBaseUrl}${cleanUrl})`;
        });
      }
      return window.marked.parse(processed);
    } catch (e) { return 'Error parsing markdown'; }
  };

  const getReadingStats = (content) => {
      if (!content) return { words: 0, time: 0 };
      const cleanContent = content.replace(/[#*`~>\[\]\(\)]/g, ''); 
      const chinese = (cleanContent.match(/[\u4e00-\u9fa5]/g) || []).length;
      const english = (cleanContent.replace(/[\u4e00-\u9fa5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+(?:\S*)/g) || []).length;
      
      const totalCount = chinese + english;
      const time = Math.ceil(totalCount / 400); 
      
      return { words: totalCount, time: time || 1 };
  };

  const stats = getReadingStats(markdownContent);

  return (
    <div className="flex flex-col animate-fade-in-content relative min-h-screen">
      <div className="md:hidden flex-none mb-4 flex items-center justify-between">
          <h2 className={`text-xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
             <Code className="text-blue-500" /> {t('projects.title')}
          </h2>
          <button 
             className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm shadow-sm"
             onClick={() => setShowList(!showList)}
          >
             {showList ? t('github_reader.view_source') : 'List'}
          </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
         <div className={`
             ${showList ? 'block' : 'hidden'} md:block
             w-full md:w-1/3 lg:w-1/4 
             sticky md:top-24
             flex-shrink-0
             transition-all duration-300
         `}>
             <div className={`${glassCardClass(darkMode)} overflow-hidden flex flex-col max-h-[calc(100vh-8rem)]`}>
                <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
                      <FolderGit2 size={18}/> {t('projects.title')} <span className="text-xs opacity-50 bg-gray-200 dark:bg-gray-700 px-1.5 rounded-full">{repos.length}</span>
                    </h3>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
                    {loadingRepos ? (
                        <div className="flex justify-center p-8"><Loader2 className="animate-spin text-gray-400" /></div>
                    ) : (
                        repos.map(repo => (
                            <button
                                key={repo.id}
                                onClick={() => handleSelectRepo(repo)}
                                className={`w-full text-left p-3 rounded-xl transition-all group relative ${
                                    selectedRepo?.id === repo.id 
                                    ? (darkMode ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm' : 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm')
                                    : (darkMode ? 'hover:bg-gray-800 text-gray-400 border border-transparent' : 'hover:bg-gray-100 text-gray-600 border border-transparent')
                                }`}
                            >
                                <div className="font-bold text-sm mb-1 truncate pr-2 flex items-center justify-between">
                                    <span>{repo.name}</span>
                                    {repo.private && <span className="text-[10px] border border-gray-500 px-1 rounded">Private</span>}
                                </div>
                                
                                <p className={`text-xs leading-relaxed line-clamp-2 mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} title={repo.description}>
                                    {repo.description || 'No description provided.'}
                                </p>

                                <div className="flex items-center gap-3 text-[10px] opacity-70">
                                    {repo.license && (
                                        <span className="flex items-center gap-1" title="License"><Scale size={10}/> {repo.license.spdx_id || 'LIC'}</span>
                                    )}
                                    <span className="flex items-center gap-1"><Star size={10} className={repo.stargazers_count > 0 ? "text-yellow-500 fill-yellow-500" : ""}/> {repo.stargazers_count}</span>
                                    <span className="flex items-center gap-1"><GitFork size={10}/> {repo.forks_count}</span>
                                </div>
                            </button>
                        ))
                    )}
                </div>
             </div>
         </div>

         <div className={`
             flex-1 w-full min-w-0
             ${glassCardClass(darkMode)} 
             flex flex-col relative min-h-[500px]
         `}>
             {loadingReadme ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4 py-20">
                     <Loader2 className="animate-spin text-blue-500" size={40} />
                     <span className="text-sm font-medium animate-pulse">{t('github_reader.loading_repos')}</span>
                 </div>
             ) : error === 'rate_limit' ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4 py-20">
                     <AlertTriangle size={64} className="text-yellow-500" strokeWidth={1} />
                     <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300">{t('github_reader.rate_limit')}</h3>
                     <p className="text-sm text-center max-w-xs">{t('github_reader.rate_limit_desc')}</p>
                 </div>
             ) : !selectedRepo ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4 opacity-50 py-20">
                     <BookOpen size={64} strokeWidth={1} />
                     <p className="text-lg">{t('github_reader.select_repo')}</p>
                 </div>
             ) : (
                 <div className="p-6 md:p-10">
                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
                         <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                             <span className="flex items-center gap-1.5" title="Published">
                                 <Calendar size={14} className="text-blue-500"/> {t('github_reader.published')}: {new Date(selectedRepo.created_at).toLocaleDateString()}
                             </span>
                             <span className="flex items-center gap-1.5" title="Updated">
                                 <Clock size={14} className="text-orange-500"/> {t('github_reader.updated')}: {new Date(selectedRepo.updated_at).toLocaleDateString()}
                             </span>
                             <span className="flex items-center gap-1.5" title="Word Count">
                                 <FileText size={14} className="text-indigo-500"/> {stats.words} {t('github_reader.words')}
                             </span>
                             <span className="flex items-center gap-1.5" title="Reading Time">
                                 <Timer size={14} className="text-green-500"/> {stats.time} {t('github_reader.reading_time')}
                             </span>
                         </div>

                         <a 
                           href={selectedRepo.html_url} 
                           target="_blank" 
                           rel="noreferrer"
                           className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all hover:-translate-y-0.5 shadow-sm opacity-80 hover:opacity-100 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                         >
                            <Github size={14}/> {t('github_reader.view_source')}
                         </a>
                     </div>

                     <div 
                        className={`markdown-body ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        dangerouslySetInnerHTML={{ __html: getHtmlContent() }}
                     />
                     
                     <div className="mt-16 pt-8 border-t border-dashed border-gray-200 dark:border-gray-800 text-center">
                        <div className="text-2xl text-gray-300 dark:text-gray-700 font-serif italic">~ EOF ~</div>
                     </div>
                 </div>
             )}
         </div>
      </div>
    </div>
  );
};

const GalleryGrid = ({ darkMode, hue, t }) => (
    <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
        <Camera size={48} className="mb-4 text-gray-400" />
        <p className="text-gray-500">{t('daily.empty')}</p>
    </div>
)

const Navbar = ({ 
    darkMode, toggleDarkMode, hue, setHue, 
    bgConfig, setBgConfig, currentView, setCurrentView,
    lang, setLang, t
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const navButtonRefs = useRef({});
  const navListRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const pickerRef = useRef(null);
  
  const handleNavClick = (viewId) => {
    // 【关键修复2】首页动画逻辑修正
    if (viewId === 'home') {
        if (currentView === 'home') {
            // 如果已经在首页，保留“反复横跳”的趣味功能
            if (window.scrollY < window.innerHeight / 2) {
                window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            // 如果从其他页面点首页，直接切换并回到顶部（像普通页面切换一样）
            setCurrentView('home');
            // 延时一点点让页面渲染完后滚动到内容区（跳过Hero）
            setTimeout(() => {
                window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' }); 
            }, 10);
        }
    } else {
        setCurrentView(viewId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const navItems = [
      { id: 'home', icon: <Home size={18}/>, label: t('nav.home') },
      { id: 'daily', icon: <Coffee size={18}/>, label: t('nav.daily') }, 
      { id: 'projects', icon: <Code size={18}/>, label: t('nav.projects') },
      { id: 'articles', icon: <BookOpen size={18}/>, label: t('nav.articles') },
      { id: 'links', icon: <LinkIcon size={18}/>, label: t('nav.links') },
      { id: 'about', icon: <User size={18}/>, label: t('nav.about') },
  ];

  useEffect(() => {
    const updateUnderline = () => {
        const activeBtn = navButtonRefs.current[currentView];
        const navList = navListRef.current;
        
        if (activeBtn && navList) {
            const btnRect = activeBtn.getBoundingClientRect();
            const navRect = navList.getBoundingClientRect();
            
            const fixedWidth = 58;
            const btnCenterRelative = (btnRect.left - navRect.left) + (btnRect.width / 2);
            const left = btnCenterRelative - (fixedWidth / 2);
            
            setUnderlineStyle({
                left: left,
                width: fixedWidth,
                opacity: 1
            });
        } else {
            setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
        }
    };

    updateUnderline();

    const resizeObserver = new ResizeObserver(() => {
        updateUnderline();
    });

    if (navListRef.current) {
        resizeObserver.observe(navListRef.current);
    }

    const onResize = () => requestAnimationFrame(updateUnderline);
    window.addEventListener('resize', onResize);
    
    const timeoutId = setTimeout(updateUnderline, 100);

    return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', onResize);
        clearTimeout(timeoutId);
    };
  }, [currentView, t, lang]); 

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = () => {
      setLang(lang === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/60 border-gray-800/50' : 'bg-white/60 border-white/50'} backdrop-blur-md border-b`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Avatar + Brand + Dropdown Container */}
          <div className="flex-shrink-0 flex items-center gap-3 relative group">
             <a href="https://lengxi.xyz" className="cursor-pointer relative">
                 <div className="relative w-10 h-10 rounded-full p-[2px]" style={{ background: 'conic-gradient(from 0deg, #4285F4 0deg 110deg, #EA4335 110deg 240deg, #FBBC05 240deg 300deg, #34A853 300deg 360deg)' }}>
                    <div className={`w-full h-full rounded-full overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} p-[1.5px] transition-transform duration-700 group-hover:scale-105`}>
                        <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover rounded-full" />
                    </div>
                 </div>
             </a>
             
             {/* Text Trigger */}
             <div className="h-16 flex items-center cursor-pointer">
                 <span className={`font-bold text-xl tracking-wide ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {t('common.name')}
                 </span>
                 <ChevronDown size={16} className={`ml-1 opacity-50 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-white' : 'text-gray-800'}`}/>
             </div>

             {/* Centered Dropdown Menu */}
             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50">
                 <div className={`rounded-xl shadow-lg overflow-hidden border p-1 backdrop-blur-xl ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'}`}>
                     {/* Static Station Item (Default Checked) */}
                     <div 
                         className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors flex justify-between items-center cursor-default ${darkMode ? 'bg-white/5 text-gray-200' : 'bg-gray-50 text-gray-800'}`}
                     >
                         {t('nav.home_station')}
                         <Check size={14} className="text-blue-500" />
                     </div>
                     
                     {/* Static Nest Item (Renamed, Disabled Link, No Check) */}
                     <div 
                         className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors flex justify-between items-center cursor-not-allowed opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                         title="Coming Soon"
                     >
                         {t('nav.home_nest')}
                     </div>
                 </div>
             </div>
          </div>

          {/* Desktop Nav with Sliding Underline */}
          <div 
            ref={navListRef}
            className={`hidden md:flex items-center gap-1 relative ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}
          >
            {navItems.map((item) => (
                <button
                    key={item.id}
                    ref={el => {
                        if (el) navButtonRefs.current[item.id] = el;
                    }}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 flex items-center justify-center relative group hover:bg-black/5 dark:hover:bg-white/5`}
                >
                    <span className="flex items-center gap-2 relative z-10">
                        <span className={`transition-colors ${currentView === item.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}>
                            {item.icon}
                        </span>
                        <span className={`${currentView === item.id ? (darkMode ? 'text-white' : 'text-gray-900') : ''}`}>
                            {item.label}
                        </span>
                    </span>
                </button>
            ))}
            {/* The Sliding Underline */}
            <div 
                className="absolute bottom-0 h-[3px] rounded-full transition-all duration-300 ease-out"
                style={{
                    left: underlineStyle.left,
                    width: underlineStyle.width,
                    opacity: underlineStyle.opacity,
                    backgroundColor: getThemeColor(hue, 1, 'dark'),
                }}
            />
          </div>

          {/* Right Function Area */}
          <div className="flex items-center gap-2">
            <div className={`flex items-center space-x-1 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                <button 
                    onClick={toggleLanguage}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 relative group transition-colors"
                    title="Switch Language"
                >
                    <Languages size={20} />
                </button>

                <div className="relative" ref={pickerRef}>
                  <button 
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 relative group transition-colors"
                    title={t('settings.title')}
                  >
                    <Palette size={20} style={{ color: showColorPicker ? getThemeColor(hue, 1, 'dark') : undefined }} />
                  </button>
                  
                  {showColorPicker && (
                    <div className="absolute right-[-60px] md:right-0 mt-3 p-5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 w-80 max-w-[calc(100vw-2rem)] animate-fade-in z-50 max-h-[85vh] overflow-y-auto">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2"><Palette size={16}/> {t('settings.title')}</span>
                        <X size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => setShowColorPicker(false)}/>
                      </div>
                      <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-semibold text-gray-500">{t('settings.theme_hue')}</span>
                              <div className="flex items-center gap-2">
                                  <span className="text-[10px] text-gray-400 font-mono">#{hue}</span>
                                  <span className="w-3 h-3 rounded-full border border-gray-200 dark:border-gray-600" style={{ backgroundColor: getThemeColor(hue) }}></span>
                              </div>
                          </div>
                          <div className="relative h-6 rounded-full overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-700">
                            <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(to right, #ffb3b3, #ffffb3, #b3ffb3, #b3ffff, #b3b3ff, #ffb3ff, #ffb3b3)' }}></div>
                            <input type="range" min="0" max="360" value={hue} onChange={(e) => setHue(Number(e.target.value))} className="absolute w-full h-full opacity-0 cursor-pointer z-10"/>
                            <div className="absolute top-0 bottom-0 w-4 bg-white border-2 border-gray-200 rounded-full shadow-md pointer-events-none transition-transform duration-75" style={{ left: `${(hue / 360) * 100}%`, backgroundColor: getThemeColor(hue, 1, 'dark'), transform: 'translateX(-50%)' }}></div>
                          </div>
                      </div>
                      <div className="border-t border-gray-100 dark:border-gray-700 my-4"></div>
                      <div className="mb-2">
                          <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 mb-3"><Sparkles size={12}/> {t('settings.dynamic_bg')}</span>
                          <div className="grid grid-cols-2 gap-3 mb-5">
                              {DYNAMIC_PRESETS.map((bg, idx) => (
                                  <div key={idx} onClick={() => setBgConfig({...bgConfig, url: bg.url})} className={`h-16 rounded-xl cursor-pointer overflow-hidden border-2 relative group transition-all ${bgConfig.url === bg.url ? 'border-blue-500 shadow-md scale-[1.02]' : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600'}`}>        
                                                  {bg.url === 'default' ? (
                                                      <div className="w-full h-full bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 flex flex-col items-center justify-center relative overflow-hidden">
                                                          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-400/20 blur-md"></div>
                                                          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-pink-400/20 blur-md"></div>
                                                          <span className="text-[10px] text-gray-600 dark:text-gray-300 font-bold relative z-10">{bg.name}</span>
                                                      </div>
                                                  ) : (
                                                      <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
                                                          <div className="absolute w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-80"></div>
                                                          <span className="text-[10px] text-white font-bold relative z-10 drop-shadow-md">{bg.name}</span>
                                                      </div>
                                                  )}
                                                  {bgConfig.url === bg.url && (<div className="absolute bottom-1.5 right-1.5 bg-blue-500 rounded-full p-[2px] shadow-sm flex items-center justify-center"><Check size={8} className="text-white" strokeWidth={3} /></div>)}
                                  </div>
                              ))}
                          </div>
                          <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 mb-3"><ImageIcon size={12}/> {t('settings.wallpaper')}</span>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                              {WALLPAPER_PRESETS.map((bg, idx) => (
                                  <div key={idx} onClick={() => setBgConfig({...bgConfig, url: bg.url})} className={`aspect-video rounded-lg cursor-pointer overflow-hidden border-2 relative group transition-all ${bgConfig.url === bg.url ? 'border-blue-500' : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600'}`}>        
                                      <img src={bg.url} alt={bg.name} className="w-full h-full object-cover" loading="lazy" />
                                      {bgConfig.url === bg.url && (<div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-[2px] shadow-sm flex items-center justify-center"><Check size={8} className="text-white" strokeWidth={3} /></div>)}
                                  </div>
                              ))}
                          </div>
                          <div className="mb-4">
                                <label className="text-[10px] text-gray-400 mb-1 block flex items-center gap-1"><LinkIcon size={10}/> {t('settings.custom_link')}</label>
                                <input type="text" value={bgConfig.url !== 'default' && bgConfig.url !== 'siri' && !WALLPAPER_PRESETS.find(p => p.url === bgConfig.url) ? bgConfig.url : ''} onChange={(e) => setBgConfig({...bgConfig, url: e.target.value})} placeholder="https://example.com/image.jpg" className="w-full text-xs p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-shadow"/>
                          </div>
                          <div className="mb-3">
                              <div className="flex justify-between text-[10px] text-gray-400 mb-1"><span>{t('settings.blur')}</span><span>{bgConfig.blur}px</span></div>
                              <input type="range" min="0" max="20" step="1" value={bgConfig.blur} onChange={(e) => setBgConfig({...bgConfig, blur: Number(e.target.value)})} className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"/>
                          </div>
                          <div>
                              <div className="flex justify-between text-[10px] text-gray-400 mb-1"><span>{t('settings.mask')}</span><span>{Math.round(bgConfig.opacity * 100)}%</span></div>
                              <input type="range" min="0" max="0.95" step="0.05" value={bgConfig.opacity} onChange={(e) => setBgConfig({...bgConfig, opacity: Number(e.target.value)})} className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"/>
                          </div>
                      </div>
                    </div>
                  )}
                </div>

                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
            
            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden flex items-center">
               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 ml-1"><Menu size={24} className={darkMode ? 'text-white' : 'text-gray-800'}/></button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav Dropdown */}
      {/* 【关键修复1】修正手机竖屏模式下菜单模糊效果 */}
      {isMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 w-full border-b shadow-lg p-4 flex flex-col gap-2 backdrop-blur-xl animate-fade-in z-50
            ${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white/70 border-white/50'}`}
          >
               {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`p-3 rounded-lg text-left flex items-center gap-3 transition-colors ${currentView === item.id ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                    >
                        {item.icon} {item.label}
                    </button>
               ))}
               <div className="border-t my-2 border-gray-200 dark:border-gray-700"></div>
               <button className="p-3 text-sm text-gray-500 flex justify-between cursor-default">{t('nav.home_station')} <Check size={14} className="text-blue-500"/></button>
               <button className="p-3 text-sm text-gray-400 flex justify-between cursor-not-allowed">{t('nav.home_nest')}</button>
          </div>
      )}
    </nav>
  );
};

// --- Page Views ---

// 2. DailyView
const DailyView = ({ hue, darkMode, t }) => (
    <div className="flex flex-col gap-8 animate-fade-in-content">
        <div className="flex items-center gap-3">
             <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-500"><Camera size={24}/></div>
             <div>
                 <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t('daily.gallery_title')}</h2>
                 <p className="text-sm text-gray-400">{t('daily.gallery_desc')}</p>
             </div>
        </div>
        <GalleryGrid darkMode={darkMode} hue={hue} t={t} />
    </div>
);

// 3. LinksView
// 【关键修复3】友链申请改版：点击复制 + 邮件唤起
const LinksView = ({ hue, darkMode, t }) => {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = () => {
        const email = "date200325@gmail.com";
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="animate-fade-in-content">
             <div className="text-center mb-10">
                 <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t('links.title')}</h2>
                 <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('links.desc')}</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {/* 申请友链入口 */}
                 <div 
                    onClick={handleEmailClick}
                    className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-dashed cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300 bg-gray-800/20' : 'border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600 bg-gray-50/50'}`}
                 >
                     {copied ? (
                         <div className="flex flex-col items-center animate-in zoom-in">
                             <Check size={32} className="text-green-500 mb-2"/>
                             <span className="text-sm font-bold text-green-500">{t('links.email_copied')}</span>
                         </div>
                     ) : (
                         <div className="flex flex-col items-center">
                             <MailIcon size={32} className="mb-2"/>
                             <span className="text-sm font-medium">{t('links.apply')}</span>
                             <span className="text-xs opacity-50 mt-1 flex items-center gap-1"><Copy size={10}/> {t('links.click_to_email')}</span>
                         </div>
                     )}
                 </div>
             </div>
        </div>
    );
};

// 4. AboutView
const AboutView = ({ hue, darkMode, t }) => (
    <div className="max-w-4xl mx-auto animate-fade-in-content">
        <div className={`${glassCardClass(darkMode)} p-8 md:p-12`}>
            <div className="mb-10 text-center md:text-left">
                 <h1 className={`text-3xl font-bold mb-4 flex items-center gap-3 justify-center md:justify-start ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <Terminal size={32} className="text-blue-500"/> 
                    {t('about.title')}
                 </h1>
                 <p className={`text-lg leading-relaxed whitespace-pre-line ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t('about.intro')}
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2 ${darkMode ? 'border-gray-700 text-gray-100' : 'border-gray-200 text-gray-800'}`}>
                        <Code size={20} className="text-blue-500"/> {t('about.tech_stack')}
                    </h3>
                    <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div>React 18 (Hooks & Functional Components)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400"></div>Tailwind CSS (Utility-first Styling)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400"></div>Lucide React (Vector Icons)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div>JavaScript (ES6+)</li>
                    </ul>
                </section>

                <section>
                    <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2 ${darkMode ? 'border-gray-700 text-gray-100' : 'border-gray-200 text-gray-800'}`}>
                        <Layout size={20} className="text-purple-500"/> {t('about.features')}
                    </h3>
                    <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div>Responsive Layout (Mobile First)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-400"></div>Dark Mode Support</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div>Glassmorphism Design</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-400"></div>Custom Theme & Background</li>
                    </ul>
                </section>
            </div>
            
            <div className={`mt-8 pt-6 border-t border-dashed ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="text-center text-sm opacity-60">
                    {t('about.version')}
                </p>
            </div>
        </div>
    </div>
);

// 1. HomeView
const HomeView = ({ hue, darkMode, t, lang }) => (
    <div className="flex flex-col lg:flex-row gap-8 animate-fade-in-content">
        <div className="w-full lg:w-[28%] flex-shrink-0 space-y-6">
            <ProfileCardPro darkMode={darkMode} hue={hue} t={t} />
            <StatCard darkMode={darkMode} hue={hue} t={t} />
             <div className={`${glassCardClass(darkMode)} p-6`}>
                <h4 className="font-bold flex items-center gap-2 mb-4">
                  <Tag size={18} className="text-blue-400"/> {t('home.tags_title')}
                </h4>
                <div className="flex flex-wrap gap-2">
                   {['React', 'Genshin', 'Music', 'Coding', 'Steam', 'Anime', 'Design', 'Next.js', 'TypeScript'].map(t => (
                       <span key={t} className={`text-xs px-3 py-1.5 rounded-lg cursor-pointer transition-all hover:text-white hover:scale-105 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}`} style={{ '--hover-bg': getThemeColor(hue, 1, 'dark') }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = getThemeColor(hue, 1, 'dark')} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>{t}</span>
                   ))}
                </div>
            </div>
        </div>
        <div className="w-full lg:w-[72%] flex flex-col gap-6">
            {/* Welcome */}
            <div className={`${glassCardClass(darkMode)} p-8 relative overflow-hidden`}>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-4">{t('home.welcome_title')}</h2>
                    <p className={`leading-relaxed whitespace-pre-line ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t('home.welcome_text')}
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                    <Sparkles size={200} />
                </div>
            </div>
            
            {/* Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className={`${glassCardClass(darkMode)} p-6 hover:shadow-lg transition-all cursor-pointer`}>
                     <div className="flex items-center gap-2 mb-3 text-blue-500 font-bold text-sm"><Star size={14}/> {t('home.rec_project')}</div>
                     <h3 className="text-lg font-bold mb-2">Mizuki OS (Web)</h3>
                     <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {lang === 'en' ? 'A web-based anime-style mock operating system.' : '一个运行在浏览器里的二次元风格模拟操作系统。'}
                     </p>
                     <div className="flex gap-2">
                        {["React", "TypeScript"].map(t => <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{t}</span>)}
                     </div>
                 </div>
                 <div className={`${glassCardClass(darkMode)} p-6 hover:shadow-lg transition-all cursor-pointer`}>
                     <div className="flex items-center gap-2 mb-3 text-green-500 font-bold text-sm"><FileText size={14}/> {t('home.latest_article')}</div>
                     <h3 className="text-lg font-bold mb-2">{lang === 'en' ? 'Markdown Guide & Test' : 'Markdown 编写指南与测试'}</h3>
                     <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {lang === 'en' ? 'A simple Markdown note example testing headers...' : '这是一个简单的 Markdown 笔记示例...'}
                     </p>
                     <span className="text-xs text-gray-400">2025-01-20</span>
                 </div>
            </div>
        </div>
    </div>
);

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : false;
    } catch (e) { return false; }
  });

  const [currentView, setCurrentView] = useState(() => {
     try {
       return localStorage.getItem('currentView') || 'home';
     } catch(e) { return 'home'; }
  });

  const [hue, setHue] = useState(() => {
    try { return Number(localStorage.getItem('hue')) || 230; } catch (e) { return 230; }
  });
  
  const [bgConfig, setBgConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('bgConfig');
      return saved ? JSON.parse(saved) : { url: WALLPAPER_PRESETS[0].url, blur: 3, opacity: 0.35 };
    } catch (e) { return { url: WALLPAPER_PRESETS[0].url, blur: 3, opacity: 0.35 }; }
  });

  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'zh'; } catch (e) { return 'zh'; }
  });

  const t = (key) => {
      const keys = key.split('.');
      let val = translations[lang];
      for (const k of keys) {
          val = val ? val[k] : null;
      }
      return val || key;
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
      let themeMeta = document.querySelector('meta[name="theme-color"]');
      if (!themeMeta) {
          themeMeta = document.createElement('meta');
          themeMeta.name = 'theme-color';
          document.head.appendChild(themeMeta);
      }
      themeMeta.content = darkMode ? '#111827' : '#ffffff';
  }, [darkMode]);

  useEffect(() => localStorage.setItem('hue', hue.toString()), [hue]);
  useEffect(() => localStorage.setItem('bgConfig', JSON.stringify(bgConfig)), [bgConfig]);
  useEffect(() => localStorage.setItem('currentView', currentView), [currentView]);
  useEffect(() => localStorage.setItem('lang', lang), [lang]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const renderContent = () => {
      switch(currentView) {
          case 'home': return <HomeView hue={hue} darkMode={darkMode} t={t} lang={lang} />;
          case 'daily': return <DailyView hue={hue} darkMode={darkMode} t={t} />;
          case 'projects': return <GithubBlogView darkMode={darkMode} hue={hue} t={t} lang={lang} />;
          case 'articles': return <div className="animate-fade-in-content"><h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}><Book/> {t('articles.title')}</h2><ArticleList darkMode={darkMode} hue={hue} lang={lang} t={t} /></div>; 
          case 'links': return <LinksView hue={hue} darkMode={darkMode} t={t} />;
          case 'about': return <AboutView hue={hue} darkMode={darkMode} t={t} />;
          default: return <HomeView hue={hue} darkMode={darkMode} t={t} lang={lang} />;
      }
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 font-sans selection:bg-pink-200 selection:text-pink-900 ${darkMode ? 'bg-gray-900' : 'bg-[#fdfbf8]'} relative`}>
      <GlobalStyles hue={hue} darkMode={darkMode} />

      <div className="fixed top-0 left-0 w-full h-[100svh] pointer-events-none z-0 overflow-hidden">
        {bgConfig.url === 'default' ? (
            <>
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob opacity-40" style={{ backgroundColor: getThemeColor(hue, 0.4) }}></div>
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000 opacity-40" style={{ backgroundColor: getThemeColor((hue + 60) % 360, 0.4) }}></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000 opacity-40" style={{ backgroundColor: getThemeColor((hue + 120) % 360, 0.4) }}></div>
            </>
        ) : bgConfig.url === 'siri' ? (
            <>
                <div className="absolute inset-0 bg-gray-900"></div>
                <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob bg-blue-600 opacity-60"></div>
                <div className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 bg-purple-600 opacity-60"></div>
                <div className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 bg-cyan-600 opacity-60"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </>
        ) : (
            <>
                <div className="absolute inset-0 bg-cover bg-center transform scale-105" style={{ backgroundImage: `url(${bgConfig.url})`, filter: `blur(${bgConfig.blur}px)` }}></div>
                <div className={`absolute inset-0 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`} style={{ opacity: bgConfig.opacity }}></div>
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
        currentView={currentView}
        setCurrentView={setCurrentView}
        lang={lang}
        setLang={setLang}
        t={t}
      />
        
      {currentView === 'home' && <Hero hue={hue} darkMode={darkMode} t={t} />}

      <main className={`flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-20 w-full ${currentView === 'home' ? '' : 'pt-24'}`}>
         {renderContent()}
      </main>

      <footer className={`py-12 mt-auto text-center text-sm ${darkMode ? 'bg-gray-900/80 text-gray-500 border-gray-800' : 'bg-white/60 text-gray-400 border-white/50'} border-t backdrop-blur-md relative z-20`}>
          <div className="max-w-7xl mx-auto px-4">
             <p className="mb-2">{t('footer.copyright')}</p>
             <p className="text-xs opacity-60">{t('footer.motto')}</p>
          </div>
      </footer>
    </div>
  );
}