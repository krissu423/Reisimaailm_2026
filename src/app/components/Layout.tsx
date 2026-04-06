import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ChatWidget } from './ChatWidget';
import { Toaster } from './ui/sonner';
import { useTheme } from '../contexts/ThemeContext';

export function Layout() {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      <Toaster position="bottom-left" theme={theme} />
    </div>
  );
}