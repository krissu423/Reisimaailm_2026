import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database (will be replaced with Supabase)
// TEST USER CREDENTIALS:
// Email: maria@email.com
// Password: test123
const mockUsers: Array<{ id: string; name: string; email: string; password: string }> = [
  {
    id: '1',
    name: 'Maria Tamm',
    email: 'maria@email.com',
    password: 'test123',
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock authentication - check against mock database
    await new Promise(resolve => setTimeout(resolve, 500));

    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser({
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration - add to mock database
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Create new user
    const newUser = {
      id: String(mockUsers.length + 1),
      name,
      email,
      password,
    };

    mockUsers.push(newUser);

    // Auto-login after registration
    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}