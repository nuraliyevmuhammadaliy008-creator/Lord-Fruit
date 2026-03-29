import { ShoppingCart, Plus } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} ${t('addToCart').toLowerCase()}!`, {
      duration: 2000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard hover className="overflow-hidden group">
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDarkMode ? 'text-black' : 'text-white'}`}>
            {product.name}
          </h3>
          <p className={`text-sm mb-4 line-clamp-2 ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
            {product.description}
          </p>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div>
              <span className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}>
                ${product.price}
              </span>
              <span className={`text-xs sm:text-sm ml-1 ${isDarkMode ? 'text-gray-600' : 'text-white/60'}`}>
                {t('perKg')}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className={`backdrop-blur-xl border rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 active:scale-95 ${
                isDarkMode 
                  ? 'bg-gray-900/20 hover:bg-gray-900/30 border-gray-400/30' 
                  : 'bg-white/20 hover:bg-white/30 border-white/30'
              }`}
            >
              <Plus className={`w-4 h-4 sm:w-5 sm:h-5 ${isDarkMode ? 'text-black' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}