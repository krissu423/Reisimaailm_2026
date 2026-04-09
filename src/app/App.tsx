import { RouterProvider } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { BookingProvider } from './contexts/BookingContext';
import { router } from './routes.tsx';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BookingProvider>
          <RouterProvider router={router} />
        </BookingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}