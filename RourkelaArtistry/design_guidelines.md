# Rourkela Mehndi & Tattoo - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium portfolio sites (Behance, Dribbble showcases) combined with luxury Indian wedding platforms and salon websites. The design celebrates traditional Indian artistry with modern web sophistication.

**Core Aesthetic**: Elegant fusion of traditional Indian cultural elements with contemporary minimalism - rich, warm, and inviting while maintaining clean, modern interfaces.

## Color Palette (User-Specified)
- **Primary**: Gold/Golden accents (#D4AF37, #FFD700 range)
- **Secondary**: Deep Maroon (#800020, #8B0000 range)
- **Neutral**: Black (#000000) and Charcoal (#1a1a1a)
- **Supporting**: Warm cream/beige for backgrounds, white for cards
- **Accent**: Soft gold shimmer effects for decorative elements

## Typography System

**Font Families** (Google Fonts):
- **Display/Headings**: 'Playfair Display' or 'Cormorant Garamond' - elegant serif for that luxury feel
- **Body Text**: 'Poppins' or 'Inter' - clean, highly readable sans-serif
- **Accent/Tagline**: 'Great Vibes' or 'Dancing Script' - cursive for artistic touches

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Subsection Titles: text-xl md:text-2xl, font-medium
- Body Large: text-lg, font-normal
- Body Regular: text-base, font-normal
- Small/Meta: text-sm, font-light

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, m-8, gap-6)

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Form containers: max-w-2xl
- Consistent section padding: py-16 md:py-20 lg:py-24

**Grid Systems**:
- Services: 2-column md:3-column lg:4-column grid
- Gallery: Masonry-style or 3-column md:4-column responsive grid
- Testimonials: 1-column md:2-column lg:3-column
- Mobile: Always collapse to single column

## Page-Specific Designs

### Home Page Structure

**Hero Section** (full viewport height):
- Animated slideshow background (5-7 stunning mehndi/tattoo images)
- Overlay gradient (black to transparent) for text readability
- Centered content with tagline in cursive font
- Studio name in large display font
- Primary CTA: "Book Appointment" and secondary "View Gallery" buttons with frosted glass/blur background
- Subtle scroll indicator at bottom

**About/Intro Section**:
- Split layout: Left side with studio image, right side with description
- Decorative golden border elements (traditional Indian motifs)
- Brief studio story and Parveen Sharma introduction
- Trust indicators: "Since [year]", "500+ Happy Clients", "Expert Artist"

**Featured Services Preview**:
- 4-column grid showcasing main categories
- Each card: Image, category name, brief description, "Learn More" link
- Hover effect: subtle lift with shadow

**Quick Gallery Highlight**:
- Masonry grid with 8-12 best works
- Mix of mehndi and tattoo designs
- "View Full Gallery" CTA

**Testimonials Carousel**:
- 3 visible cards with client photos, names, ratings, and reviews
- Auto-rotating with manual navigation dots
- Golden star ratings

**Location Highlight**:
- Embedded Google Maps (medium height, rounded corners)
- Address and contact details alongside
- "Get Directions" button

### Services Page

**Hero Banner**: 
- Service-specific imagery background
- Page title with decorative underline

**Service Categories Grid**:
- Each category as an expanded card with:
  - Large representative image
  - Category name and icon
  - 3-4 subcategories/variations listed
  - Starting price range (if applicable)
  - "Book This Service" CTA
- Categories: Bridal Mehndi, Arabic Mehndi, Stylish Mehndi, Full Hand Mehndi, Arm Tattoo, Neck Tattoo, Hand Tattoo, Back Tattoo

**Process Timeline**:
- Horizontal step-by-step visual showing booking to completion
- Icon-driven with connecting line

### Gallery Page

**Filter Navigation**:
- Sticky horizontal pill buttons: All, Mehndi, Tattoos, Bridal, etc.
- Active state with golden underline/fill

**Image Grid**:
- Responsive masonry layout or justified grid
- Lightbox modal on click with navigation arrows
- Image captions showing category and brief description
- Lazy loading for performance
- 30-50 high-quality images total

### Booking Page

**Split Layout**:
- Left: Elegant form container with golden border
  - Name (text input)
  - Phone Number (tel input)
  - Preferred Date (date picker with calendar icon)
  - Service Type (dropdown with all categories)
  - Message/Special Requests (textarea)
  - Submit button: "Send Booking Request via WhatsApp"
- Right: Booking information card
  - Working hours
  - Booking guidelines
  - Quick contact options
  - Decorative mehndi pattern illustration

**Form Design**:
- Clean, spacious input fields with golden focus states
- Floating labels or top-aligned labels
- Clear validation states
- Submit triggers WhatsApp deep link with pre-filled message

### Contact Page

**Hero Contact Section**:
- Split: Left with large map embed, right with contact details
- Contact cards showing phone, WhatsApp, email, address
- "Message on WhatsApp" prominent button

**Working Hours Table**:
- Clean, elegant table or card-based layout

**Social Media Section**:
- Large icon buttons for Instagram, Facebook, WhatsApp
- "Follow our work" heading

## Component Library

### Navigation
- Transparent header on scroll-top, solid on scroll with blur effect
- Logo (studio name in display font with mehndi icon)
- Links: Home, Services, Gallery, Booking, Contact
- Mobile: Hamburger menu with slide-in drawer
- Active page highlighted with golden underline

### Buttons
**Primary**: Golden background, black text, rounded-lg, hover lift effect
**Secondary**: Outlined golden border, transparent fill, hover golden fill
**Ghost**: Text-only with golden underline on hover

### Cards
- Rounded corners (rounded-xl)
- Subtle shadow (shadow-lg)
- Hover: transform scale and deeper shadow
- Image cards: overlay gradient on hover revealing text

### Footer
**Multi-Column Layout**:
- Column 1: Logo, tagline, brief description
- Column 2: Quick Links (all pages)
- Column 3: Contact Information (address, phone, WhatsApp)
- Column 4: Working Hours, Social Media Icons
- Bottom bar: Copyright "Made by Parveen Sharma | 9777614017"

### Forms
- Generous padding in inputs (px-4 py-3)
- Border focus with golden accent
- Placeholder text in subtle gray
- Icons inside inputs where appropriate

## Images Strategy

**Required Images**:
1. **Hero Slideshow**: 5-7 professional photos of best mehndi/tattoo work
2. **Service Category Cards**: 8 representative images (one per category)
3. **Gallery**: 30-50 high-resolution design photos across all categories
4. **Testimonial Photos**: Client photos (can use placeholder avatars)
5. **About Section**: Studio interior or artist at work photo
6. **Decorative Elements**: Traditional Indian border patterns, mehndi motifs

**Image Treatment**:
- Slight warm filter for consistency
- Consistent aspect ratios within sections
- Optimized for web (WebP format)
- Alt text for accessibility

## Animations & Interactions

**Subtle Animations** (use sparingly):
- Hero slideshow: Slow Ken Burns effect (zoom + pan)
- Cards: Hover lift with spring animation
- Page load: Fade-in for content sections (staggered)
- Gallery: Smooth lightbox transitions
- No distracting parallax or heavy scroll effects

**Micro-interactions**:
- Button hover states with smooth transitions
- Form input focus states
- Navigation underline slide effect
- Image hover overlays

## Accessibility
- WCAG AA contrast ratios (especially gold on white)
- Focus visible states on all interactive elements
- Semantic HTML throughout
- Skip navigation link
- Alt text for all images
- Keyboard navigation support
- Screen reader friendly forms with proper labels

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)
- Touch-friendly tap targets (minimum 44x44px)

---

**Key Design Principles**: 
- Luxurious yet approachable
- Traditional aesthetics with modern execution
- Image-forward showcasing artistry
- Clear conversion paths (booking CTAs prominent)
- Performance-optimized despite rich visuals