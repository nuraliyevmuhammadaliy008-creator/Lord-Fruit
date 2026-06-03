import { Link } from 'react-router';
import { ArrowRight, Award, Truck, Globe as GlobeIcon, ShieldCheck } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { productsData } from '../data/products';
import { motion } from 'motion/react';

export function Home() {
  const { t, language } = useLanguage();
  const { isDarkMode } = useTheme();

  const featuredProducts = productsData.slice(0, 3);

  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('organicProducts'),
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('fastDelivery'),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('bestQuality'),
    },
    {
      icon: <GlobeIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('certifiedProducts'),
    },
  ];

  // Update product names based on language
  const localizedProducts = featuredProducts.map((product, index) => {
    const keys = ['driedApricots', 'driedRaisins', 'driedFigs'];
    const descKeys = ['apricotsDesc', 'raisinsDesc', 'figsDesc'];
    return {
      ...product,
      name: t(keys[index] as any),
      description: t(descKeys[index] as any),
    };
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className={`text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-black' : 'text-white'}`}>
              {t('heroTitle')}
            </h1>
            <p className={`text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-800' : 'text-white/90'}`}>
              {t('heroSubtitle')}
            </p>
            <p className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-4 ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link to="/products">
                <button className={`w-full sm:w-auto backdrop-blur-xl border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                  isDarkMode 
                    ? 'bg-gray-900/30 hover:bg-gray-900/40 border-gray-400/30 text-black' 
                    : 'bg-white/20 hover:bg-white/30 border-white/30 text-white'
                }`}>
                  {t('shopNow')}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </Link>
              <Link to="/about">
                <button className={`w-full sm:w-auto backdrop-blur-xl border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDarkMode 
                    ? 'bg-white/40 hover:bg-white/50 border-gray-300/30 text-black' 
                    : 'bg-white/10 hover:bg-white/20 border-white/30 text-white'
                }`}>
                  {t('learnMore')}
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-20"
          >
            {features.map((feature, index) => (
              <GlassCard key={index} hover className="p-4 sm:p-6 text-center">
                <div className={`flex justify-center mb-2 sm:mb-3 ${isDarkMode ? 'text-gray-800' : 'text-white/80'}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-black' : 'text-white'}`}>
                  {feature.title}
                </h3>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
              {t('productsTitle')}
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
              {t('productsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {localizedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <button className={`backdrop-blur-xl border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto ${
                isDarkMode 
                  ? 'bg-gray-900/30 hover:bg-gray-900/40 border-gray-400/30 text-black' 
                  : 'bg-white/20 hover:bg-white/30 border-white/30 text-white'
              }`}>
                {t('viewAll')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}