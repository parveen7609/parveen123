import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import bridalMehndiImg from "@assets/generated_images/Bridal_mehndi_hands_design_6e9dea13.png";
import arabicMehndiImg from "@assets/generated_images/Arabic_mehndi_design_055b381c.png";
import stylishMehndiImg from "@assets/generated_images/Stylish_modern_mehndi_fd070757.png";
import fullHandMehndiImg from "@assets/generated_images/Full_hand_mehndi_282de0cc.png";
import armTattooImg from "@assets/generated_images/Arm_tattoo_design_125254d1.png";
import neckTattooImg from "@assets/generated_images/Neck_tattoo_design_f591e0a1.png";
import handTattooImg from "@assets/generated_images/Hand_tattoo_design_1d5bd998.png";
import backTattooImg from "@assets/generated_images/Back_tattoo_design_5404a5fe.png";

const heroImages = [
  bridalMehndiImg,
  arabicMehndiImg,
  stylishMehndiImg,
  fullHandMehndiImg,
  armTattooImg,
  neckTattooImg,
];

const services = [
  {
    title: "Bridal Mehndi",
    description: "Intricate traditional designs for your special day",
    image: bridalMehndiImg,
  },
  {
    title: "Arabic Mehndi",
    description: "Bold and elegant Arabic patterns",
    image: arabicMehndiImg,
  },
  {
    title: "Stylish Mehndi",
    description: "Contemporary fusion designs",
    image: stylishMehndiImg,
  },
  {
    title: "Tattoo Art",
    description: "Professional custom tattoo designs",
    image: armTattooImg,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely stunning bridal mehndi! Parveen's artistry is exceptional. Highly recommended!",
  },
  {
    name: "Anita Patel",
    rating: 5,
    text: "Beautiful Arabic mehndi designs. Very professional and talented artist.",
  },
  {
    name: "Rahul Kumar",
    rating: 5,
    text: "Got an amazing tattoo done here. The detailing is incredible!",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Rourkela Mehndi & Tattoo
          </h1>
          <p className="text-3xl sm:text-4xl lg:text-5xl text-primary mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Where Art Meets Skin
          </p>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl">
            Perfect Mehndi & Tattoo Creations in Rourkela
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/booking">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                data-testid="button-hero-book-now"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-view-gallery"
              >
                View Gallery
              </Button>
            </Link>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-colors"
          data-testid="button-hero-prev"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-colors"
          data-testid="button-hero-next"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-primary w-8" : "bg-white/50"
              }`}
              data-testid={`button-slide-${index}`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From traditional bridal mehndi to contemporary tattoo art, we bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 transition-transform hover:scale-105 cursor-pointer"
                data-testid={`card-service-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" data-testid="button-view-all-services">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Gallery Highlights
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our finest creations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              bridalMehndiImg,
              arabicMehndiImg,
              stylishMehndiImg,
              fullHandMehndiImg,
              armTattooImg,
              neckTattooImg,
              handTattooImg,
              backTattooImg,
            ].map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-md hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105"
                data-testid={`img-gallery-preview-${index}`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button size="lg" data-testid="button-view-full-gallery">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
