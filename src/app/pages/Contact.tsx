import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      duration: 3000,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      value: 'info@lordfruit.uz',
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Phone',
      value: '+998 99 123 45 67',
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Address',
      value: 'Tashkent, Uzbekistan',
    },
  ];

  return (
    <div className="min-h-screen px-3 sm:px-4 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
            {t('contactTitle')}
          </h1>
          <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 font-semibold text-sm sm:text-base ${isDarkMode ? 'text-black' : 'text-white'}`}>
                    {t('yourName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 sm:py-3 rounded-xl backdrop-blur-xl border transition-all duration-300 focus:outline-none text-sm sm:text-base ${
                      isDarkMode 
                        ? 'bg-white/40 border-gray-300/50 text-black placeholder-gray-500 focus:border-gray-400' 
                        : 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40'
                    }`}
                    placeholder={t('yourName')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block mb-2 font-semibold text-sm sm:text-base ${isDarkMode ? 'text-black' : 'text-white'}`}>
                    {t('yourEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 sm:py-3 rounded-xl backdrop-blur-xl border transition-all duration-300 focus:outline-none text-sm sm:text-base ${
                      isDarkMode 
                        ? 'bg-white/40 border-gray-300/50 text-black placeholder-gray-500 focus:border-gray-400' 
                        : 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40'
                    }`}
                    placeholder={t('yourEmail')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block mb-2 font-semibold text-sm sm:text-base ${isDarkMode ? 'text-black' : 'text-white'}`}>
                    {t('yourMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 sm:py-3 rounded-xl backdrop-blur-xl border transition-all duration-300 focus:outline-none resize-none text-sm sm:text-base ${
                      isDarkMode 
                        ? 'bg-white/40 border-gray-300/50 text-black placeholder-gray-500 focus:border-gray-400' 
                        : 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40'
                    }`}
                    placeholder={t('yourMessage')}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full backdrop-blur-xl border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                    isDarkMode 
                      ? 'bg-gray-900/30 hover:bg-gray-900/40 border-gray-400/30 text-black' 
                      : 'bg-white/20 hover:bg-white/30 border-white/30 text-white'
                  }`}
                >
                  {t('send')}
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <GlassCard key={index} hover className="p-5 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`backdrop-blur-xl border rounded-full p-3 sm:p-4 ${
                    isDarkMode ? 'bg-gray-900/20 border-gray-400/30' : 'bg-white/20 border-white/30'
                  }`}>
                    <div className={isDarkMode ? 'text-black' : 'text-white'}>
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xs sm:text-sm mb-1 ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
                      {info.title}
                    </h3>
                    <p className={`font-semibold text-base sm:text-lg ${isDarkMode ? 'text-black' : 'text-white'}`}>
                      {info.value}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Map placeholder */}
            <GlassCard className="overflow-hidden">
              <div className={`h-48 sm:h-64 flex items-center justify-center ${
                isDarkMode ? 'bg-gradient-to-br from-gray-400/30 to-gray-500/30' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
              }`}>
                <MapPin className={`w-12 h-12 sm:w-16 sm:h-16 ${isDarkMode ? 'text-gray-600' : 'text-white/50'}`} />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}