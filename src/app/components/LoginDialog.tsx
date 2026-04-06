import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useAuth } from '../contexts/AuthContext';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Palun täida kõik väljad');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      toast.success('Sisselogimine õnnestus!');
      onOpenChange(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error('Sisselogimine ebaõnnestus');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={() => onOpenChange(false)}
        >
          <X className="w-4 h-4" />
        </Button>
        
        <DialogHeader>
          <DialogTitle>Logi sisse</DialogTitle>
          <DialogDescription>
            Sisesta oma e-posti aadress ja salasõna
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-post</Label>
            <Input
              id="email"
              type="email"
              placeholder="nimi@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Salasõna</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Tühista
            </Button>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? 'Logib sisse...' : 'Logi sisse'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
