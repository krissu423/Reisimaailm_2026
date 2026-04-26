import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Star, MapPin, Calendar, Users, Heart, Euro } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = location.state || {};

  const [favorites, setFavorites] = useState<number[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>(searchParams.maxPrice || '');

  const trips = [
    {
      id: 1,
      destination: 'Pariis, Prantsusmaa',
      image: 'https://images.unsplash.com/photo-1642947392578-b37fbd9a4d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDIzNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '5 päeva / 4 ööd',
      price: 499,
      rating: 4.8,
      reviews: 234,
      includes: ['Lennupiletid', 'Hotell', 'Hommikusöök'],
      date: '15-20 Apr 2026'
    },
    {
      id: 2,
      destination: 'Rooma, Itaalia',
      image: 'https://images.unsplash.com/photo-1662898290891-a6c7f022e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY29sb3NzZXVtJTIwYW5jaWVudHxlbnwxfHx8fDE3NzQyNDU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 päeva / 5 ööd',
      price: 549,
      rating: 4.9,
      reviews: 187,
      includes: ['Lennupiletid', 'Hotell', 'Giid'],
      date: '22-27 Apr 2026'
    },
    {
      id: 3,
      destination: 'Barcelona, Hispaania',
      image: 'https://images.unsplash.com/photo-1664027802288-293c4ebdcf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzYWdyYWRhJTIwZmFtaWxpYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQyODU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 päeva / 3 ööd',
      price: 479,
      rating: 4.7,
      reviews: 156,
      includes: ['Lennupiletid', 'Hotell', 'Hommikusöök'],
      date: '10-13 Mai 2026'
    },
    {
      id: 4,
      destination: 'Amsterdam, Holland',
      image: 'https://images.unsplash.com/photo-1703630397392-c11a6751ca93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBjYW5hbHMlMjBob3VzZXN8ZW58MXx8fHwxNzc0MjU1Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 päeva / 3 ööd',
      price: 429,
      rating: 4.6,
      reviews: 203,
      includes: ['Lennupiletid', 'Hotell', 'Jalgrattarendi'],
      date: '5-8 Mai 2026'
    },
    {
      id: 5,
      destination: 'Santorini, Kreeka',
      image: 'https://images.unsplash.com/photo-1671760085670-2be5869f38dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBibHVlJTIwZG9tZXN8ZW58MXx8fHwxNzc0MTk5NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '7 päeva / 6 ööd',
      price: 699,
      rating: 4.9,
      reviews: 312,
      includes: ['Lennupiletid', 'Hotell', 'Transfer'],
      date: '1-7 Jun 2026'
    },
    {
      id: 6,
      destination: 'Phuket, Tai',
      image: 'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHVrZXQlMjB0aGFpbGFuZCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzc0Mjk2MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10 päeva / 9 ööd',
      price: 849,
      rating: 4.8,
      reviews: 267,
      includes: ['Lennupiletid', 'Resort', 'Hommikusöök'],
      date: '15-24 Jun 2026'
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredTrips = trips.filter(trip => {
    if (priceFilter && trip.price > parseInt(priceFilter)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Tagasi
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2 text-primary">
            Saadaolevad reisid
          </h1>
          <p className="text-muted-foreground">
            Leidsime {filteredTrips.length} pakkumist
            {searchParams.destination && ` sihtkohta "${searchParams.destination}"`}
          </p>
        </div>

        {/* Price Filter */}
        <div className="mb-6 flex gap-4 items-end">
          <div className="flex-1 max-w-xs">
            <label className="text-sm font-medium mb-2 block">Maksimaalne hind</label>
            <div className="relative">
              <Euro className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Sisesta max hind"
                type="number"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          {priceFilter && (
            <Button variant="outline" onClick={() => setPriceFilter('')}>
              Tühista filter
            </Button>
          )}
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredTrips.map((trip) => (
            <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6">
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <ImageWithFallback
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(trip.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(trip.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <CardContent className="md:col-span-2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl mb-1">{trip.destination}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {trip.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {trip.duration}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-semibold">{trip.rating}</span>
                        <span className="text-sm text-muted-foreground">({trip.reviews})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {trip.includes.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">Alates</div>
                      <div className="text-2xl font-semibold text-primary">€{trip.price}</div>
                      <div className="text-sm text-muted-foreground">inimese kohta</div>
                    </div>
                    <Button
                      size="lg"
                      onClick={() => navigate('/booking', { state: { trip } })}
                    >
                      Broneeri
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}