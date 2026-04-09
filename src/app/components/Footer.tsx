import { Link } from "react-router";
import {
  Plane,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <Plane className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl text-primary">
                ReisiMaailm
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Sinu usaldusväärne reisipartner alates 2020.
              aastast. Avastame koos maailma.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Kiirlingid</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Avaleht
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sihtkohad
                </Link>
              </li>
              <li>
                <Link
                  to="/my-trips"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Minu Reisid
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4">
              Informatsioon
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Meist
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kasutustingimused
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privaatsuspoliitika
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  KKK
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Vabaduse väljak 10
                  <br />
                  10146 Tallinn, Eesti
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+37212345678"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +372 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:info@reisimaailm.ee"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@reisimaailm.ee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ReisiMaailm. Kõik õigused kaitstud.
          </p>
        </div>
      </div>
    </footer>
  );
}