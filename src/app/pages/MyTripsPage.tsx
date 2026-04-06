import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { FileText, Download, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Booking {
  bookingId: string;
  destination: string;
  image: string;
  date: string;
  duration: string;
  guests: number;
  totalPaid: number;
  status: string;
}

export function MyTripsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      toast.error('Palun logi sisse, et näha oma reise');
      return;
    }

    // Mock existing bookings
    const mockBookings: Booking[] = [
      {
        bookingId: 'BK1234567',
        destination: 'Barcelona, Hispaania',
        image: 'https://images.unsplash.com/photo-1664027802288-293c4ebdcf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzYWdyYWRhJTIwZmFtaWxpYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQyODU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        date: '10-13 Mai 2026',
        duration: '4 päeva / 3 ööd',
        guests: 2,
        totalPaid: 958,
        status: 'Kinnitatud',
      },
      {
        bookingId: 'BK1234568',
        destination: 'Amsterdam, Holland',
        image: 'https://images.unsplash.com/photo-1703630397392-c11a6751ca93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBjYW5hbHMlMjBob3VzZXN8ZW58MXx8fHwxNzc0MjU1Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        date: '5-8 Mai 2026',
        duration: '4 päeva / 3 ööd',
        guests: 1,
        totalPaid: 429,
        status: 'Kinnitatud',
      },
    ];

    // Add new booking if coming from payment
    if (location.state?.newBooking) {
      setBookings([location.state.newBooking, ...mockBookings]);
    } else {
      setBookings(mockBookings);
    }
  }, [isAuthenticated, location.state, navigate]);

  const handleViewDocuments = (booking: Booking) => {
    navigate('/documents', { state: { booking } });
  };

  const handleDownloadTicket = (booking: Booking) => {
    toast.success(`Pilet ${booking.bookingId} allalaadimine algab...`);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl mb-8 text-primary">
          Minu reisid
        </h1>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Tulevased</TabsTrigger>
            <TabsTrigger value="past">Möödunud</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <BookingCard
                  key={booking.bookingId}
                  booking={booking}
                  onViewDocuments={handleViewDocuments}
                  onDownloadTicket={handleDownloadTicket}
                />
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="mb-2">Teil ei ole tulevasi reise</h3>
                  <p className="text-muted-foreground mb-6">
                    Alusta oma järgmise seikluse planeerimist juba täna
                  </p>
                  <Button onClick={() => navigate('/search')}>
                    Sirvi reise
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="mb-2">Möödunud reise ei leitud</h3>
                <p className="text-muted-foreground">
                  Siin kuvatakse teie lõppenud reisid
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

interface BookingCardProps {
  booking: Booking;
  onViewDocuments: (booking: Booking) => void;
  onDownloadTicket: (booking: Booking) => void;
}

function BookingCard({ booking, onViewDocuments, onDownloadTicket }: BookingCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <ImageWithFallback
            src={booking.image}
            alt={booking.destination}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-600">
            {booking.status}
          </Badge>
        </div>

        <div className="md:col-span-3 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl mb-1">{booking.destination}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Broneeringu number: {booking.bookingId}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Kokku makstud</div>
              <div className="text-xl font-semibold text-primary">€{booking.totalPaid}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div>
                <div className="text-muted-foreground">Kuupäev</div>
                <div>{booking.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <div className="text-muted-foreground">Kestus</div>
                <div>{booking.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-muted-foreground" />
              <div>
                <div className="text-muted-foreground">Külalised</div>
                <div>{booking.guests} inimest</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => onViewDocuments(booking)}
              className="gap-2"
            >
              <FileText className="w-4 h-4" />
              Vaata dokumente
            </Button>
            <Button
              variant="outline"
              onClick={() => onDownloadTicket(booking)}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Laadi pilet alla
            </Button>
            <Button variant="ghost" className="gap-2 ml-auto">
              Üksikasjad
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}