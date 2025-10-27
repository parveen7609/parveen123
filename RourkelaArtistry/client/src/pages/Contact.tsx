import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-secondary to-secondary/80">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-secondary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Find Us Here</h2>
              <div className="aspect-video rounded-md overflow-hidden mb-8 border-2 border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.1234567890!2d84.85!3d22.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE1JzAwLjAiTiA4NMKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                  data-testid="iframe-google-maps"
                />
              </div>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-instagram"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    <SiInstagram className="w-5 h-5" />
                    Instagram
                  </Button>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-facebook"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    <SiFacebook className="w-5 h-5" />
                    Facebook
                  </Button>
                </a>
                <a
                  href="https://wa.me/917609835426"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-whatsapp"
                >
                  <Button size="lg" className="gap-2">
                    <SiWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        1st Floor, Forum Galleria Mall<br />
                        Civil Township, opposite Reliance Digital<br />
                        Y-6, Raghunathpali<br />
                        Rourkela, Odisha 769012
                      </p>
                      <a
                        href="https://maps.google.com/?q=Forum+Galleria+Mall+Rourkela"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4"
                      >
                        <Button variant="outline" size="sm" data-testid="button-get-directions">
                          Get Directions
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">Phone Numbers</h3>
                      <div className="space-y-2">
                        <a
                          href="tel:9777614017"
                          className="block text-muted-foreground hover:text-primary transition-colors"
                          data-testid="link-phone-primary"
                        >
                          9777614017
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">WhatsApp Booking</h3>
                      <p className="text-muted-foreground mb-4">
                        Send us a message for quick booking confirmations
                      </p>
                      <a
                        href="https://wa.me/919777614017"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full" data-testid="button-whatsapp-booking">
                          7609835426 (WhatsApp)
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Working Hours</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Sunday</span>
                          <span className="text-foreground">10:00 AM - 10:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    Made by Parveen Sharma
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Professional mehndi and tattoo artist with years of experience
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>9777614017</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
