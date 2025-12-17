// src/utils/themeHelpers.js

export const getThemeColor = (hue, alpha = 1, type = 'default') => {
  if (type === 'dark') return `hsla(${hue}, 60%, 65%, ${alpha})`;
  if (type === 'bg') return `hsla(${hue}, 90%, 90%, ${alpha})`;
  return `hsla(${hue}, 85%, 80%, ${alpha})`;
};

export const glassCardClass = (darkMode) => 
  `rounded-3xl shadow-sm transition-all duration-300 border backdrop-blur-md ${
    darkMode 
      ? 'bg-gray-900/60 border-gray-700/50 text-white hover:bg-gray-900/70' 
      : 'bg-white/60 border-white/50 text-gray-800 hover:bg-white/70'
  }`;