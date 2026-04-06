import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Download, FileText, Plane, Hotel, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';

export function DocumentsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Broneeringut ei leitud</h2>
          <Button onClick={() => navigate('/my-trips')}>
            Tagasi minu reisidesse
          </Button>
        </div>
      </div>
    );
  }

  const documents = [
    {
      id: 1,
      title: 'Lennupiletid',
      icon: Plane,
      description: 'E-piletid kõikidele reisijatele',
      filename: `flight-tickets-${booking.bookingId}.pdf`,
    },
    {
      id: 2,
      title: 'Hotelli kinnitus',
      icon: Hotel,
      description: 'Hotelli broneeringu kinnitus',
      filename: `hotel-confirmation-${booking.bookingId}.pdf`,
    },
    {
      id: 3,
      title: 'Reisikindlustus',
      icon: FileText,
      description: 'Kindlustuspoliis ja tingimused',
      filename: `insurance-${booking.bookingId}.pdf`,
    },
    {
      id: 4,
      title: 'Reisiinfo',
      icon: Info,
      description: 'Oluline info teie reisi kohta',
      filename: `travel-info-${booking.bookingId}.pdf`,
    },
  ];

  const handleDownload = (doc: typeof documents[0]) => {
    toast.success(`Dokument "${doc.title}" allalaadimine algab...`);
  };

  const handleDownloadAll = () => {
    toast.success('Kõikide dokumentide allalaadimine algab...');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Tagasi
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2 text-primary">
            Reisidokumendid
          </h1>
          <p className="text-muted-foreground">
            {booking.destination} • {booking.date}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Broneeringu ülevaade</CardTitle>
              <Button onClick={handleDownloadAll} variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Laadi kõik alla
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Broneering</div>
                <div className="font-semibold">{booking.bookingId}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Kuupäev</div>
                <div className="font-semibold">{booking.date}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Külalised</div>
                <div className="font-semibold">{booking.guests} inimest</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Staatus</div>
                <div className="font-semibold text-green-600">{booking.status}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Saadaolevad dokumendid</h2>
          
          {documents.map((doc, index) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <doc.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {doc.description}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {doc.filename}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleDownload(doc)}
                    variant="outline"
                    size="sm"
                    className="gap-2 flex-shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    Laadi alla
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-muted/30">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Oluline teave
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Palun prindi välja või salvesta oma e-piletid nutitelefoni</li>
              <li>• Veendu, et sinu pass kehtib vähemalt 6 kuud pärast tagasisõidu kuupäeva</li>
              <li>• Soovitame lennujaama saabuda vähemalt 2 tundi enne väljumist</li>
              <li>• Küsimuste korral võta meiega ühendust 24/7 klienditeeninduse kaudu</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
