import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import bridalMehndiImg from "@assets/generated_images/Bridal_mehndi_hands_design_6e9dea13.png";
import arabicMehndiImg from "@assets/generated_images/Arabic_mehndi_design_055b381c.png";
import stylishMehndiImg from "@assets/generated_images/Stylish_modern_mehndi_fd070757.png";
import fullHandMehndiImg from "@assets/generated_images/Full_hand_mehndi_282de0cc.png";
import bridalFeetMehndiImg from "@assets/generated_images/Bridal_feet_mehndi_design_ca17adc9.png";
import mandalaPalmMehndiImg from "@assets/generated_images/Mandala_palm_mehndi_design_502c10dd.png";
import minimalistMehndiImg from "@assets/generated_images/Minimalist_modern_mehndi_design_4cca1b62.png";
import pakistaniArmMehndiImg from "@assets/generated_images/Pakistani_bridal_arm_mehndi_fee82a1e.png";
import armTattooImg from "@assets/generated_images/Arm_tattoo_design_125254d1.png";
import neckTattooImg from "@assets/generated_images/Neck_tattoo_design_f591e0a1.png";
import handTattooImg from "@assets/generated_images/Hand_tattoo_design_1d5bd998.png";
import backTattooImg from "@assets/generated_images/Back_tattoo_design_5404a5fe.png";
import floralSleeveTattooImg from "@assets/generated_images/Floral_sleeve_tattoo_design_6710cc73.png";
import geometricForearmTattooImg from "@assets/generated_images/Geometric_forearm_tattoo_design_7a944ec5.png";
import mandalaShoulderTattooImg from "@assets/generated_images/Mandala_shoulder_tattoo_design_09cd3d3d.png";
import wristTattooImg from "@assets/generated_images/Delicate_wrist_tattoo_design_4db9b0d2.png";

const galleryItems = [
  { image: bridalMehndiImg, category: "Mehndi", title: "Bridal Mehndi Design" },
  { image: arabicMehndiImg, category: "Mehndi", title: "Arabic Mehndi Pattern" },
  { image: stylishMehndiImg, category: "Mehndi", title: "Stylish Modern Mehndi" },
  { image: fullHandMehndiImg, category: "Mehndi", title: "Full Hand Mehndi" },
  { image: bridalFeetMehndiImg, category: "Mehndi", title: "Bridal Feet Mehndi" },
  { image: mandalaPalmMehndiImg, category: "Mehndi", title: "Mandala Palm Design" },
  { image: minimalistMehndiImg, category: "Mehndi", title: "Minimalist Mehndi" },
  { image: pakistaniArmMehndiImg, category: "Mehndi", title: "Pakistani Bridal Arm" },
  { image: armTattooImg, category: "Tattoo", title: "Arm Tattoo Design" },
  { image: neckTattooImg, category: "Tattoo", title: "Neck Tattoo Art" },
  { image: handTattooImg, category: "Tattoo", title: "Hand Tattoo Design" },
  { image: backTattooImg, category: "Tattoo", title: "Back Tattoo Art" },
  { image: floralSleeveTattooImg, category: "Tattoo", title: "Floral Sleeve Tattoo" },
  { image: geometricForearmTattooImg, category: "Tattoo", title: "Geometric Forearm Tattoo" },
  { image: mandalaShoulderTattooImg, category: "Tattoo", title: "Mandala Shoulder Tattoo" },
  { image: wristTattooImg, category: "Tattoo", title: "Delicate Wrist Tattoo" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Mehndi", "Tattoo"];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-secondary to-secondary/80">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-secondary-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto">
            Explore our collection of beautiful mehndi and tattoo designs
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-md cursor-pointer hover-elevate active-elevate-2 transition-transform hover:scale-105"
                onClick={() => setLightboxImage(item.image)}
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">{item.title}</p>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No items found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery item"
            className="max-w-full max-h-[90vh] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
