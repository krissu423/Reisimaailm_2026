import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Star, MapPin, Calendar, Users, Check, Plane, Hotel, Coffee, Car, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TripDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const trip = location.state?.trip;

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Reisi ei leitud</h2>
          <Button onClick={() => navigate('/search')}>
            Tagasi otsingusse
          </Button>
        </div>
      </div>
    );
  }

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

        {/* Hero Image */}
        <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-8">
          <ImageWithFallback
            src={trip.image}
            alt={trip.destination}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl mb-3 text-primary">{trip.destination}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {trip.date}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {trip.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold text-foreground">{trip.rating}</span>
                  <span className="text-sm">({trip.reviews} hinnangut)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {trip.includes?.map((item: string) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Ülevaade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {trip.fullDescription || trip.description || `Avasta ${trip.destination} meie hoolikalt koostatud reisipaketiga. See reis pakub suurepärast võimalust kogeda sihtkoha kultuuri, ajalugu ja imelisi vaatamisväärsusi. Nautige mugavat majutust, sujuvat transporti ja meeldejäävaid elamusi.`}
                </p>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Mis on hinna sees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Plane className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Lennupiletid</h4>
                      <p className="text-sm text-muted-foreground">
                        Edasi-tagasi lennupiletid majandusklassis. Käsipagasi ja registreeritav pagasi kaasas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Hotel className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Majutus</h4>
                      <p className="text-sm text-muted-foreground">
                        {trip.duration} majutus kvaliteetses hotellis või resordi. Toad on varustatud kõigi mugavustega.
                      </p>
                    </div>
                  </div>

                  {trip.includes?.includes('Hommikusöök') && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Coffee className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Hommikusöök</h4>
                        <p className="text-sm text-muted-foreground">
                          Igapäevane hommikusöök buffet-lauas kohalikes restoranides.
                        </p>
                      </div>
                    </div>
                  )}

                  {(trip.includes?.includes('Transfer') || trip.includes?.includes('Jalgrattarendi')) && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Car className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Transport</h4>
                        <p className="text-sm text-muted-foreground">
                          {trip.includes?.includes('Transfer')
                            ? 'Lennujaam-hotell transfer mõlemas suunas mugava bussiga.'
                            : 'Jalgrattarendi kogu reisi ajaks, et avastada linna oma tempos.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {trip.includes?.includes('Giid') && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Info className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Giid ja ekskursioonid</h4>
                        <p className="text-sm text-muted-foreground">
                          Kohalik giid ja linnaekskursioonid peamiste vaatamisväärsuste juurde.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>Oluline informatsioon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tühistamise tingimused</h4>
                  <p className="text-sm text-muted-foreground">
                    Tasuta tühistamine kuni 48 tundi enne väljumist. Hilisema tühistamise korral võidakse rakendada tühistamise tasu.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mida kaasa võtta</h4>
                  <p className="text-sm text-muted-foreground">
                    Pass (kehtiv vähemalt 6 kuud pärast tagasituleku kuupäeva), reisikindlustus, mugavad jalanõud ja riided vastavalt ilmastikule.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Viisa nõuded</h4>
                  <p className="text-sm text-muted-foreground">
                    Eesti kodanikud ei vaja viisat. Kontrollige alati kehtivaid reisireegleid enne broneerimist.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Broneeri nüüd</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4 border-b">
                  <div className="text-sm text-muted-foreground mb-1">Alates</div>
                  <div className="text-4xl font-semibold text-primary mb-1">€{trip.price}</div>
                  <div className="text-sm text-muted-foreground">inimese kohta</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kuupäevad:</span>
                    <span className="font-medium">{trip.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kestus:</span>
                    <span className="font-medium">{trip.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Hinnang:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-medium">{trip.rating}/5</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => navigate('/booking', { state: { trip } })}
                >
                  Broneeri
                </Button>

                <div className="bg-muted/50 p-4 rounded-md space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Parim hinna garantii</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tasuta tühistamine 48h enne</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 klienditoe tugi</span>
                  </div>
                </div>

                <div className="pt-4 border-t text-center text-sm text-muted-foreground">
                  <p>Küsimused? <button className="text-primary hover:underline" onClick={() => navigate('/contact')}>Võta meiega ühendust</button></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}