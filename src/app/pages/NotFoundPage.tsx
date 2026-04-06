import { useNavigate } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardContent className="py-12 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-primary">404</span>
          </div>
          <h1 className="text-3xl mb-3 text-primary">Lehte ei leitud</h1>
          <p className="text-muted-foreground mb-8">
            Kahjuks ei leidnud me otsitavat lehekülge. Kontrollige URL-i või naasake avalehele.
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => navigate('/')} className="gap-2">
              <Home className="w-4 h-4" />
              Avalehele
            </Button>
            <Button onClick={() => navigate('/search')} variant="outline" className="gap-2">
              <Search className="w-4 h-4" />
              Sirvi reise
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
