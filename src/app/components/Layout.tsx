import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'sonner';

export function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
