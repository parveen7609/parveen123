import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bridalMehndiImg from "@assets/generated_images/Bridal_mehndi_hands_design_6e9dea13.png";
import arabicMehndiImg from "@assets/generated_images/Arabic_mehndi_design_055b381c.png";
import stylishMehndiImg from "@assets/generated_images/Stylish_modern_mehndi_fd070757.png";
import fullHandMehndiImg from "@assets/generated_images/Full_hand_mehndi_282de0cc.png";
import armTattooImg from "@assets/generated_images/Arm_tattoo_design_125254d1.png";
import neckTattooImg from "@assets/generated_images/Neck_tattoo_design_f591e0a1.png";
import handTattooImg from "@assets/generated_images/Hand_tattoo_design_1d5bd998.png";
import backTattooImg from "@assets/generated_images/Back_tattoo_design_5404a5fe.png";

const services = [
  {
    title: "Bridal Mehndi",
    image: bridalMehndiImg,
    description: "Exquisite traditional bridal mehndi designs that make your special day unforgettable",
    features: [
      "Full hand and feet designs",
      "Traditional intricate patterns",
      "Peacock and floral motifs",
      "Customized bridal themes",
    ],
  },
  {
    title: "Arabic Mehndi",
    image: arabicMehndiImg,
    description: "Bold and elegant Arabic mehndi patterns with contemporary flair",
    features: [
      "Bold flowing patterns",
      "Geometric designs",
      "Modern minimalist style",
      "Quick application",
    ],
  },
  {
    title: "Stylish Mehndi",
    image: stylishMehndiImg,
    description: "Contemporary fusion designs blending traditional and modern aesthetics",
    features: [
      "Trendy minimalist patterns",
      "Finger designs",
      "Fusion style mehndi",
      "Perfect for parties",
    ],
  },
  {
    title: "Full Hand Mehndi",
    image: fullHandMehndiImg,
    description: "Complete hand coverage with intricate mandala and traditional patterns",
    features: [
      "Palm and back coverage",
      "Detailed mandala designs",
      "Complex floral motifs",
      "Traditional artistry",
    ],
  },
  {
    title: "Arm Tattoo",
    image: armTattooImg,
    description: "Professional arm tattoo designs from small accents to full sleeves",
    features: [
      "Custom sleeve designs",
      "Floral and geometric art",
      "Detailed ink work",
      "Professional equipment",
    ],
  },
  {
    title: "Neck Tattoo",
    image: neckTattooImg,
    description: "Elegant and sophisticated neck tattoo art",
    features: [
      "Delicate designs",
      "Minimalist artwork",
      "Artistic linework",
      "Subtle and elegant",
    ],
  },
  {
    title: "Hand Tattoo",
    image: handTattooImg,
    description: "Artistic hand and finger tattoo designs",
    features: [
      "Finger tattoos",
      "Hand patterns",
      "Intricate details",
      "Modern aesthetic",
    ],
  },
  {
    title: "Back Tattoo",
    image: backTattooImg,
    description: "Large-scale back tattoo art with stunning detail",
    features: [
      "Full back coverage",
      "Mandala patterns",
      "Custom artwork",
      "Professional execution",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-secondary to-secondary/80">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-secondary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto">
            Professional mehndi and tattoo artistry tailored to your vision
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 transition-transform hover:scale-[1.02]"
                data-testid={`card-service-${index}`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking">
                    <Button className="w-full" data-testid={`button-book-${index}`}>
                      Book This Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with us to schedule your appointment and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="px-8" data-testid="button-cta-book">
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
