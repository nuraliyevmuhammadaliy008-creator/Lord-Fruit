import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}