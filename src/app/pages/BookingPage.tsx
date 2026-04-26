import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Users, CreditCard, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GuestSelector } from '../components/GuestSelector';

export function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const trip = location.state?.trip;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: '1 külalist',
    specialRequests: '',
  });

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Reis ei leitud</h2>
          <Button onClick={() => navigate('/search')}>
            Tagasi otsingusse
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error('Palun logi esmalt sisse');
      return;
    }

    // Calculate total
    const guestCount = parseInt(formData.guests.split(' ')[0]) || 1;
    const total = trip.price * guestCount;

    navigate('/payment', {
      state: {
        trip,
        formData,
        total
      }
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const guestCount = parseInt(formData.guests.split(' ')[0]) || 1;
  const totalPrice = trip.price * guestCount;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Tagasi
        </Button>

        <h1 className="text-3xl md:text-4xl mb-8 text-primary">
          Broneeri oma reis
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reisija andmed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Eesnimi *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Perekonnanimi *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-post *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Külaliste arv *</Label>
                    <GuestSelector
                      value={formData.guests}
                      onChange={(value) => handleChange('guests', value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Eritooted või soovidused</Label>
                    <textarea
                      id="specialRequests"
                      className="w-full min-h-24 px-3 py-2 rounded-md border-2 border-border bg-input-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow]"
                      value={formData.specialRequests}
                      onChange={(e) => handleChange('specialRequests', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  className="flex-1"
                >
                  Tühista
                </Button>
                <Button type="submit" className="flex-1 gap-2">
                  Jätka maksmisele
                  <CreditCard className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Broneeringu kokkuvõte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <ImageWithFallback
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h3 className="mb-1">{trip.destination}</h3>
                  <p className="text-sm text-muted-foreground">{trip.duration}</p>
                  <p className="text-sm text-muted-foreground">{trip.date}</p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hind inimese kohta</span>
                    <span>€{trip.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Külalised
                    </span>
                    <span>{guestCount}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Kokku</span>
                    <span className="text-2xl font-semibold text-primary">
                      €{totalPrice}
                    </span>
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded-md space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tasuta tühistamine kuni 48h enne</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Parim hinna garantii</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 klienditoe tugi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}