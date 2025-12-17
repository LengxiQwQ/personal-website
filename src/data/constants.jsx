// src/data/constants.jsx
import React from 'react';
import { Github, Youtube, Instagram } from 'lucide-react';
import { BilibiliIcon, SteamIcon, PixivIcon } from '../components/icons/CustomIcons';

export const AVATAR_URL = "https://github.com/LengxiQwQ/assets/blob/main/avatar/%E4%BA%8C%E6%AC%A1%E5%85%83/20230327215624_f83de.jpg?raw=true";
export const WALLPAPER_REPO_URL = "https://github.com/LengxiQwQ/assets/tree/main/wallpaper/my-site-wallpaper";

export const DYNAMIC_PRESETS = [
    { name: "默认光斑", url: "default", desc: "柔和律动" },
    { name: "炫彩流光", url: "siri", desc: "深色极光" },
];

export const WALLPAPER_PRESETS = [
    { name: "像素云朵", url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop" },
    { name: "枫叶", url: "https://w.wallhaven.cc/full/gw/wallhaven-gwwkql.jpg" },
    { name: "Miku", url: "https://w.wallhaven.cc/full/21/wallhaven-21179y.png" },
    { name: "日系街道", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop" },
    { name: "赛博朋克", url: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop" },
];

export const SOCIAL_LINKS = [
    { name: "Github", href: "https://github.com/LengxiQwQ", icon: <Github />, color: "#333" },
    { name: "Bilibili", href: "https://space.bilibili.com/477811145", icon: <BilibiliIcon />, color: "#FB7299", sizeOffset: 2 },
    { name: "Youtube", href: "https://www.youtube.com/@lengxiya", icon: <Youtube />, color: "#FF0000", sizeOffset: 2 },
    { name: "Instagram", href: "https://www.instagram.com/zixun0325/#", icon: <Instagram />, color: "#E4405F" },
    { name: "Pixiv", href: "https://www.pixiv.net/users/67452260", icon: <PixivIcon />, color: "#0096FA", sizeOffset: -1 },
    { name: "Steam", href: "https://steamcommunity.com/id/lengxiya/", icon: <SteamIcon />, color: "#171a21" },
];

export const galleryImages = [
    { id: 1, title: "夏日祭典", url: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?w=500&auto=format&fit=crop" },
    { id: 2, title: "东京塔", url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=500&auto=format&fit=crop" },
    { id: 3, title: "樱花", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop" },
    { id: 4, title: "猫咪", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop" },
];

export const projects = [
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

export const posts = [
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

export const musicList = [
  { id: 1, title: "Secret Base ~君がくれたもの~", artist: "Zone", duration: "4:55" },
  { id: 2, title: "Ref:rain", artist: "Aimer", duration: "4:48" },
  { id: 3, title: "打上花火", artist: "DAOKO × 米津玄師", duration: "4:49" },
];