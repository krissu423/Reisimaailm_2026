import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Sõnum saadetud! Vastame teile 24 tunni jooksul.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4 text-primary">
            Võta meiega ühendust
          </h1>
          <p className="text-lg text-muted-foreground">
            Oleme siin, et aidata sul planeerida sinu unistuste reisi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Saada meile sõnum</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nimi *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                    </div>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Teema *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Sõnum *</Label>
                    <textarea
                      id="message"
                      required
                      className="w-full min-h-32 px-3 py-2 rounded-md border bg-input-background"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto gap-2">
                    <Send className="w-4 h-4" />
                    Saada sõnum
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kontaktinfo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefon</div>
                    <div className="text-sm text-muted-foreground">+372 1234 5678</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">E-post</div>
                    <div className="text-sm text-muted-foreground">info@reisimaailm.ee</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Aadress</div>
                    <div className="text-sm text-muted-foreground">
                      Vabaduse väljak 10<br />
                      10146 Tallinn, Eesti
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Lahtiolekuajad</div>
                    <div className="text-sm text-muted-foreground">
                      E-R: 9:00 - 18:00<br />
                      L-P: 10:00 - 16:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">24/7 Hädaabi</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Vajad abi reisi ajal? Oleme alati kättesaadavad.
                </p>
                <Button variant="outline" className="w-full">
                  Helista nüüd
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
