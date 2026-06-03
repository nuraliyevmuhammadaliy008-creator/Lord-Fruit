import { Link } from 'react-router';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const handleCheckout = () => {
    toast.success('Order placed successfully!', {
      duration: 3000,
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen px-3 sm:px-4 pt-24 sm:pt-32 pb-12 sm:pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full"
        >
          <GlassCard className="p-8 sm:p-12 max-w-md mx-auto">
            <ShoppingBag className={`w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 ${isDarkMode ? 'text-gray-500' : 'text-white/50'}`} />
            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
              {t('emptyCart')}
            </h2>
            <Link to="/products">
              <button className={`backdrop-blur-xl border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto ${
                isDarkMode 
                  ? 'bg-gray-900/30 hover:bg-gray-900/40 border-gray-400/30 text-black' 
                  : 'bg-white/20 hover:bg-white/30 border-white/30 text-white'
              }`}>
                {t('continueShopping')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-3 sm:px-4 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>
            {t('cartTitle')}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Image */}
                    <div className="w-full sm:w-24 md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className={`text-lg sm:text-xl font-semibold mb-1 sm:mb-2 ${isDarkMode ? 'text-black' : 'text-white'}`}>
                        {item.name}
                      </h3>
                      <p className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
                        {item.description}
                      </p>
                      <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}>
                        ${item.price} <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-600' : 'text-white/60'}`}>{t('perKg')}</span>
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 sm:gap-4">
                      <div className={`flex items-center gap-2 sm:gap-3 backdrop-blur-xl border rounded-full px-3 sm:px-4 py-2 ${
                        isDarkMode ? 'bg-white/40 border-gray-300/50' : 'bg-white/10 border-white/20'
                      }`}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={`transition-colors ${isDarkMode ? 'text-black hover:text-gray-700' : 'text-white hover:text-white/70'}`}
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className={`font-semibold w-6 sm:w-8 text-center text-sm sm:text-base ${isDarkMode ? 'text-black' : 'text-white'}`}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={`transition-colors ${isDarkMode ? 'text-black hover:text-gray-700' : 'text-white hover:text-white/70'}`}
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="backdrop-blur-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 active:scale-95"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-5 sm:p-6 sticky top-24 sm:top-32">
              <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-black' : 'text-white'}`}>
                {t('total')}
              </h2>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {cart.map(item => (
                  <div key={item.id} className={`flex justify-between text-sm sm:text-base ${isDarkMode ? 'text-gray-700' : 'text-white/70'}`}>
                    <span className="truncate mr-2">{item.name} x {item.quantity}</span>
                    <span className="flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className={`border-t pt-3 sm:pt-4 mb-4 sm:mb-6 ${isDarkMode ? 'border-gray-300' : 'border-white/20'}`}>
                <div className="flex justify-between items-center">
                  <span className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-black' : 'text-white'}`}>
                    {t('total')}
                  </span>
                  <span className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}>
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className={`w-full backdrop-blur-xl border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mb-3 sm:mb-4 ${
                  isDarkMode 
                    ? 'bg-gray-900/30 hover:bg-gray-900/40 border-gray-400/30 text-black' 
                    : 'bg-white/20 hover:bg-white/30 border-white/30 text-white'
                }`}
              >
                {t('checkout')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <Link to="/products">
                <button className={`w-full backdrop-blur-xl border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/40 hover:bg-white/50 border-gray-300/30 text-black' 
                    : 'bg-white/10 hover:bg-white/20 border-white/30 text-white'
                }`}>
                  {t('continueShopping')}
                </button>
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}