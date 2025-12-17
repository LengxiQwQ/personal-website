import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { getThemeColor } from '../../utils/themeHelpers';
import { SOCIAL_LINKS } from '../../data/constants';

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
      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm pb-1">
        {text}
      </span>
      <span 
        className="ml-1.5 w-1.5 h-6 md:h-8 bg-pink-400 animate-pulse inline-block rounded-full"
      ></span>
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
        <h1 className={`text-5xl md:text-7xl font-black mb-4 font-comic tracking-tight drop-shadow-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          冷汐<span style={{ color: getThemeColor(hue, 1, 'dark') }}>的小站</span>
        </h1>
        
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

export default Hero;