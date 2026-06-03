import { Award, Target, Globe as GlobeIcon } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

export function About() {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const stats = [
    { icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />, title: t('ourMission'), description: t('missionText') },
    { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, title: t('qualityControl'), description: t('qualityText') },
    { icon: <GlobeIcon className="w-6 h-6 sm:w-8 sm:h-8" />, title: t('globalReach'), description: t('globalText') },
  ];

  return (
    <div className="min-h-screen px-3 sm:px-4 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
            {t('aboutTitle')}
          </h1>
          <p className={`text-xl sm:text-2xl mb-6 sm:mb-8 ${isDarkMode ? 'text-gray-800' : 'text-white/80'}`}>
            {t('aboutSubtitle')}
          </p>
          <GlassCard className="max-w-4xl mx-auto p-6 sm:p-8">
            <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-800' : 'text-white/90'}`}>
              {t('aboutDescription')}
            </p>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard hover className="p-6 sm:p-8 h-full">
                <div className={`mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-800' : 'text-white/80'}`}>
                  {stat.icon}
                </div>
                <h3 className={`text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-black' : 'text-white'}`}>
                  {stat.title}
                </h3>
                <p className={`leading-relaxed text-sm sm:text-base ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
                  {stat.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Company Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-16"
        >
          <GlassCard className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
              <div className="flex flex-col justify-center">
                <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
                  Lord Fruit - 2015
                </h2>
                <p className={`mb-3 sm:mb-4 leading-relaxed ${isDarkMode ? 'text-gray-800' : 'text-white/80'}`}>
                  🌍 30+ {t('globalText').split(' ')[2]}
                </p>
                <p className={`mb-3 sm:mb-4 leading-relaxed ${isDarkMode ? 'text-gray-800' : 'text-white/80'}`}>
                  ✅ {t('certifiedProducts')}
                </p>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-800' : 'text-white/80'}`}>
                  🏆 {t('bestQuality')}
                </p>
              </div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599975744981-48d63c8f38af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGFwcmljb3RzJTIwZnJ1aXR8ZW58MXx8fHwxNzcwOTc5MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lord Fruit Products"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}