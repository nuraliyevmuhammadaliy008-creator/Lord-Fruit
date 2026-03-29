import { Link, useLocation } from 'react-router';
import { ShoppingCart, Globe, Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { GlassCard } from './GlassCard';
import { Language } from '../translations/translations';
import { useState } from 'react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { getCartCount } = useCart();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'uz', name: 'UZ' },
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
  ];

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/products', label: t('products') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: t('contact') },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-3 sm:py-4">
      <GlassCard className={`max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 ${isDarkMode ? 'bg-gray-900/30' : ''}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 sm:gap-2">
            <div className="text-2xl sm:text-3xl">🍇</div>
            <span className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}>
              <span className="hidden sm:inline">Lord Fruit</span>
              <span className="sm:hidden">Lord</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 ${
                  isDarkMode ? 'text-black' : 'text-white'
                } ${
                  isActive(link.path)
                    ? 'font-semibold scale-110'
                    : isDarkMode ? 'hover:text-gray-700' : 'hover:text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Dark Mode, Language and Cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`backdrop-blur-xl border border-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'bg-gray-900/20' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              )}
            </button>

            {/* Language Switcher */}
            <div className={`hidden sm:flex items-center gap-2 backdrop-blur-xl border border-white/20 rounded-full px-2 sm:px-3 py-2 ${
              isDarkMode ? 'bg-gray-900/20' : 'bg-white/10'
            }`}>
              <Globe className={`w-3 h-3 sm:w-4 sm:h-4 ${isDarkMode ? 'text-black' : 'text-white'}`} />
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                    language === lang.code
                      ? isDarkMode 
                        ? 'bg-gray-900/40 text-black font-semibold'
                        : 'bg-white/30 text-white font-semibold'
                      : isDarkMode
                        ? 'text-black/70 hover:text-black'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <div className={`backdrop-blur-xl border border-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-900/20 hover:bg-gray-900/30' : 'bg-white/10 hover:bg-white/20'
              }`}>
                <ShoppingCart className={`w-4 h-4 sm:w-5 sm:h-5 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden backdrop-blur-xl border border-white/20 rounded-full p-2 sm:p-3 ${
                isDarkMode ? 'bg-gray-900/20' : 'bg-white/10'
              }`}
            >
              {mobileMenuOpen ? (
                <X className={`w-4 h-4 sm:w-5 sm:h-5 ${isDarkMode ? 'text-black' : 'text-white'}`} />
              ) : (
                <Menu className={`w-4 h-4 sm:w-5 sm:h-5 ${isDarkMode ? 'text-black' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
            <nav className="flex flex-col gap-2 sm:gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-4 rounded-xl transition-all duration-300 ${
                    isDarkMode ? 'text-black' : 'text-white'
                  } ${
                    isActive(link.path)
                      ? isDarkMode ? 'bg-gray-900/30 font-semibold' : 'bg-white/20 font-semibold'
                      : isDarkMode ? 'hover:bg-gray-900/20' : 'hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <Globe className={`w-4 h-4 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                <div className="flex gap-2 flex-wrap">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 sm:px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        language === lang.code
                          ? isDarkMode
                            ? 'bg-gray-900/40 text-black font-semibold'
                            : 'bg-white/30 text-white font-semibold'
                          : isDarkMode
                            ? 'text-black/70 hover:text-black bg-gray-900/10'
                            : 'text-white/70 hover:text-white bg-white/10'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </GlassCard>
    </header>
  );
}