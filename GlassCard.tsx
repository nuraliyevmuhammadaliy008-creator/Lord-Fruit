import { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div
      className={`
        backdrop-blur-xl 
        ${isDarkMode ? 'bg-white/80 border-gray-300/50' : 'bg-white/10 border-white/20'}
        border 
        rounded-2xl sm:rounded-3xl 
        shadow-lg shadow-black/10
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1' : ''}
        ${hover && isDarkMode ? 'hover:bg-white/90' : ''}
        ${hover && !isDarkMode ? 'hover:bg-white/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}