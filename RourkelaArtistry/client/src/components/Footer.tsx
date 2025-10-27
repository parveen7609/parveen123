import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-primary">
              Rourkela Mehndi & Tattoo
            </h3>
            <p className="text-sm text-secondary-foreground/80 mb-4 leading-relaxed">
              Where Art Meets Skin — Perfect Mehndi & Tattoo Creations in Rourkela.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/917609835426"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm hover:text-primary transition-colors" data-testid="link-footer-home">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-sm hover:text-primary transition-colors" data-testid="link-footer-services">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-sm hover:text-primary transition-colors" data-testid="link-footer-gallery">
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <a className="text-sm hover:text-primary transition-colors" data-testid="link-footer-booking">
                    Book Appointment
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm hover:text-primary transition-colors" data-testid="link-footer-contact">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  1st Floor, Forum Galleria Mall, Civil Township, opposite Reliance Digital, Y-6, Raghunathpali, Rourkela, Odisha 769012
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">9777614017</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">7609835426 (WhatsApp)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Working Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Monday - Sunday</span>
              </li>
              <li className="text-sm pl-6">10:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            © 2025 Rourkela Mehndi & Tattoo. All rights reserved. | Made by Parveen Sharma | 7609835426
          </p>
        </div>
      </div>
    </footer>
  );
}
