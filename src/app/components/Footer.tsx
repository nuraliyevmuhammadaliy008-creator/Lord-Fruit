import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#' },
    { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#' },
    { icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#' },
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#' },
  ];

  return (
    <footer className="px-3 sm:px-4 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <GlassCard className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl">🍇</div>
                <span className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}>Lord Fruit</span>
              </div>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
                {t('heroDescription')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
                {t('contact')}
              </h3>
              <div className={`space-y-1 sm:space-y-2 text-sm sm:text-base ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
                <p>Email: info@lordfruit.uz</p>
                <p>Phone: +998 90 700 50 70</p>
                <p>Samarqand, Urgut</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
                {t('followUs')}
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`backdrop-blur-xl border rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-900/20 hover:bg-gray-900/30 border-gray-400/20' 
                        : 'bg-white/10 hover:bg-white/20 border-white/20'
                    }`}
                  >
                    <div className={isDarkMode ? 'text-black' : 'text-white'}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center ${isDarkMode ? 'border-gray-300' : 'border-white/20'}`}>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-600' : 'text-white/60'}`}>
              © 2024 Lord Fruit. {t('allRightsReserved')}
            </p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}