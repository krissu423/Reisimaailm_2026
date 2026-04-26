import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, MapPin, Star, Sparkles, Globe2, Shield, Euro } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { DateRangePicker } from '../components/DateRangePicker';
import { GuestSelector } from '../components/GuestSelector';

export function HomePage() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    navigate('/search', {
      state: { destination, dates, guests, maxPrice }
    });
  };

  const popularDestinations = [
    {
      name: 'Pariis, Prantsusmaa',
      image: 'https://images.unsplash.com/photo-1642947392578-b37fbd9a4d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDIzNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '€499',
      description: 'Avasta romantiline Pariis - Eiffeli torn, Louvre ja Seine jõgi',
      rating: 4.8
    },
    {
      name: 'Rooma, Itaalia',
      image: 'https://images.unsplash.com/photo-1662898290891-a6c7f022e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY29sb3NzZXVtJTIwYW5jaWVudHxlbnwxfHx8fDE3NzQyNDU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '€549',
      description: 'Külasta Colosseum, Vatikaani ja muistset ajalugu',
      rating: 4.9
    },
    {
      name: 'Barcelona, Hispaania',
      image: 'https://images.unsplash.com/photo-1664027802288-293c4ebdcf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzYWdyYWRhJTIwZmFtaWxpYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQyODU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '€479',
      description: 'Gaudi arhitektuur, Sagrada Familia ja Vahemereline kultuur',
      rating: 4.7
    },
    {
      name: 'Amsterdam, Holland',
      image: 'https://images.unsplash.com/photo-1703630397392-c11a6751ca93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBjYW5hbHMlMjBob3VzZXN8ZW58MXx8fHwxNzc0MjU1Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '€429',
      description: 'Kanalid, Van Gogh muuseum ja jalgrattasõit linna südames',
      rating: 4.6
    },
    {
      name: 'Kreeka, Santorini',
      image: 'https://images.unsplash.com/photo-1671760085670-2be5869f38dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBibHVlJTIwZG9tZXN8ZW58MXx8fHwxNzc0MTk5NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '€699',
      description: 'Valged majad, sinised kuplistid ja võrratu päikeseloojang',
      rating: 4.9
    },
    {
      name: 'Phuket, Tai',
      image: 'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHVrZXQlMjB0aGFpbGFuZCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzc0Mjk2MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '€849',
      description: 'Troopilised rannad, kristallselge vesi ja Tai kultuur',
      rating: 4.8
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
            Avasta maailma koos ReisiMaailmaga
          </h1>
          <p className="text-lg md:text-xl mb-12 text-foreground/80">
            Sinu unistuste reis algab siit - parimad pakkumised, parimad sihtkohad
          </p>

          {/* Search Box */}
          <Card className="shadow-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Sihtkoht"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <DateRangePicker
                  value={dates}
                  onChange={setDates}
                />
                <GuestSelector
                  value={guests}
                  onChange={setGuests}
                />
                <div className="relative">
                  <Euro className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Max hind"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button
                onClick={handleSearch}
                className="w-full md:w-auto gap-2"
                size="lg"
              >
                <Search className="w-5 h-5" />
                Otsi reise
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-primary">
            Populaarsed sihtkohad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((dest, idx) => (
              <DestinationCard key={idx} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-primary">
            Miks valida meid?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2">Parimad hinnad</h3>
              <p className="text-muted-foreground">
                Garanteerime turul kõige konkurentsivõimelisemad hinnad
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2">Üle 1000 sihtkoha</h3>
              <p className="text-muted-foreground">
                Avasta maailma iga nurka meie laia valikuga
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2">24/7 tugi</h3>
              <p className="text-muted-foreground">
                Meie klienditoe meeskond on alati valmis aitama
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ name, image, price, rating, description }: { name: string; image: string; price: string; rating: number; description?: string }) {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => navigate('/search')}>
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold shadow-lg">
          {price}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span>{rating}</span>
        </div>
      </CardContent>
    </Card>
  );
}