import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ChatWidget } from './ChatWidget';
import { Toaster } from './ui/sonner';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect } from 'react';

export function Layout() {
  const { theme } = useTheme();
  
  // Suppress Jotai warning from sonner
  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (args[0]?.includes?.('Detected multiple Jotai instances')) {
        return;
      }
      if (args[0]?.includes?.('multiple renderers concurrently')) {
        return;
      }
      originalWarn.apply(console, args);
    };
    
    return () => {
      console.warn = originalWarn;
    };
  }, []);
  
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