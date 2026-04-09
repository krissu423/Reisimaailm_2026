import { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface Booking {
  bookingId: string;
  userId: string;
  destination: string;
  image: string;
  date: string;
  duration: string;
  guests: number;
  totalPaid: number;
  status: string;
  createdAt: string;
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'userId' | 'createdAt'>) => void;
  getUserBookings: (userId: string) => Booking[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

// Mock booking database (will be replaced with Supabase)
const mockBookings: Booking[] = [
  {
    bookingId: 'BK1234567',
    userId: '1',
    destination: 'Barcelona, Hispaania',
    image: 'https://images.unsplash.com/photo-1664027802288-293c4ebdcf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzYWdyYWRhJTIwZmFtaWxpYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQyODU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '10-13 Mai 2026',
    duration: '4 päeva / 3 ööd',
    guests: 2,
    totalPaid: 958,
    status: 'Kinnitatud',
    createdAt: '2026-04-01T10:00:00Z',
  },
  {
    bookingId: 'BK1234568',
    userId: '1',
    destination: 'Amsterdam, Holland',
    image: 'https://images.unsplash.com/photo-1703630397392-c11a6751ca93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBjYW5hbHMlMjBob3VzZXN8ZW58MXx8fHwxNzc0MjU1Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '5-8 Mai 2026',
    duration: '4 päeva / 3 ööd',
    guests: 1,
    totalPaid: 429,
    status: 'Kinnitatud',
    createdAt: '2026-03-25T14:30:00Z',
  },
];

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const auth = useAuth();

  const addBooking = (booking: Omit<Booking, 'userId' | 'createdAt'>) => {
    if (!auth.user) {
      throw new Error('Must be logged in to create booking');
    }

    const newBooking: Booking = {
      ...booking,
      userId: auth.user.id,
      createdAt: new Date().toISOString(),
    };

    setBookings(prev => [newBooking, ...prev]);
  };

  const getUserBookings = (userId: string): Booking[] => {
    return bookings.filter(b => b.userId === userId);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, getUserBookings }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
}
