import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { productsData } from '../data/products';
import { motion } from 'motion/react';

export function Products() {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const productKeys = [
    { nameKey: 'driedApricots', descKey: 'apricotsDesc' },
    { nameKey: 'driedRaisins', descKey: 'raisinsDesc' },
    { nameKey: 'driedFigs', descKey: 'figsDesc' },
    { nameKey: 'driedPrunes', descKey: 'prunesDesc' },
    { nameKey: 'driedDates', descKey: 'datesDesc' },
    { nameKey: 'driedCranberries', descKey: 'cranberriesDesc' },
  ];

  const localizedProducts = productsData.map((product, index) => ({
    ...product,
    name: t(productKeys[index].nameKey as any),
    description: t(productKeys[index].descKey as any),
  }));

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
            {t('productsTitle')}
          </h1>
          <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
            {t('productsSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {localizedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}