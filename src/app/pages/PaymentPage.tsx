import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, CreditCard, Lock, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useAuth } from '../contexts/AuthContext';
import { useBooking } from '../contexts/BookingContext';
import { toast } from 'sonner';

export function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { trip, formData, total } = location.state || {};
  const { isAuthenticated } = useAuth();
  const { addBooking } = useBooking();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      toast.error('Palun logi sisse, et teha broneeringut');
      return;
    }
  }, [isAuthenticated, navigate]);

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  if (!trip || !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Broneeringu andmed puuduvad</h2>
          <Button onClick={() => navigate('/search')}>
            Tagasi otsingusse
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create booking
    const newBooking = {
      bookingId: `BK${Date.now()}`,
      destination: trip.destination,
      image: trip.image,
      date: trip.date,
      duration: trip.duration,
      guests: formData.guests,
      totalPaid: total,
      status: 'Kinnitatud',
    };

    addBooking(newBooking);

    toast.success('Makse õnnestus! Broneering kinnitatud.');
    setIsProcessing(false);

    // Navigate to My Trips
    navigate('/my-trips');
  };

  const handleChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
          disabled={isProcessing}
        >
          <ArrowLeft className="w-4 h-4" />
          Tagasi
        </Button>

        <h1 className="text-3xl md:text-4xl mb-8 text-primary">
          Makse
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  Turvaline makse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Kaardi number *</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        maxLength={19}
                        value={paymentData.cardNumber}
                        onChange={(e) => handleChange('cardNumber', e.target.value)}
                        className="pl-10"
                        disabled={isProcessing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Kaardi omaniku nimi *</Label>
                    <Input
                      id="cardName"
                      placeholder="NIMI PEREKONNANIMI"
                      required
                      value={paymentData.cardName}
                      onChange={(e) => handleChange('cardName', e.target.value.toUpperCase())}
                      disabled={isProcessing}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Kehtivusaeg *</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        required
                        maxLength={5}
                        value={paymentData.expiryDate}
                        onChange={(e) => handleChange('expiryDate', e.target.value)}
                        disabled={isProcessing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        required
                        maxLength={3}
                        type="password"
                        value={paymentData.cvv}
                        onChange={(e) => handleChange('cvv', e.target.value)}
                        disabled={isProcessing}
                      />
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">Teie andmed on kaitstud</span>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Kasutame SSL-krüpteerimist, et tagada teie makseandmete turvalisus
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate(-1)}
                      className="flex-1"
                      disabled={isProcessing}
                    >
                      Tagasi
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1 gap-2"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Töötleb...
                        </>
                      ) : (
                        `Maksa €${total}`
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Tellimuse kokkuvõte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2">{trip.destination}</h3>
                  <p className="text-sm text-muted-foreground">{trip.date}</p>
                  <p className="text-sm text-muted-foreground">{trip.duration}</p>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Reisija</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Külalised</p>
                    <p className="text-sm text-muted-foreground">{formData.guests}</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hind ({formData.guests} × €{trip.price})</span>
                    <span>€{trip.price * formData.guests}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Maksud ja tasud</span>
                    <span>Sisaldub</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Kokku</span>
                    <span className="text-2xl font-semibold text-primary">
                      €{total}
                    </span>
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