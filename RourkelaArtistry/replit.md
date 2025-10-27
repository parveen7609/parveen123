# Rourkela Mehndi & Tattoo

## Overview

Rourkela Mehndi & Tattoo is a premium portfolio website for a professional mehndi and tattoo studio in Rourkela, Odisha. The application showcases the studio's services, gallery of work, and provides a booking system for clients. The design aesthetic blends traditional Indian cultural elements with contemporary minimalism, featuring a gold, maroon, and charcoal color scheme that evokes luxury and artistic craftsmanship.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement) and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router

**UI Component Strategy**
- **Shadcn/ui** design system built on Radix UI primitives
- Component library follows the "New York" style variant
- All UI components are colocated in `client/src/components/ui/`
- Custom components (Navigation, Footer) built on top of base UI components
- Uses CSS variables for theming with HSL color values

**Styling Approach**
- **Tailwind CSS** for utility-first styling
- Custom color palette defined via CSS variables in `client/src/index.css`
- Design guidelines document (`design_guidelines.md`) specifies:
  - Typography system using Google Fonts (Playfair Display, Poppins, Great Vibes)
  - Color palette: Gold/Golden primary (#D4AF37), Deep Maroon secondary (#800020), Black/Charcoal neutrals
  - Spacing primitives and layout grids
  - Page-specific design patterns

**State Management**
- **TanStack Query (React Query)** for server state management and API data fetching
- Custom query client configuration in `client/src/lib/queryClient.ts`
- Form state managed via **React Hook Form** with Zod schema validation

**Page Structure**
- Home: Hero carousel, services preview, testimonials
- Services: Detailed service listings with images and features
- Gallery: Filterable image gallery with lightbox functionality
- Booking: Form-based appointment booking system
- Contact: Contact information with embedded Google Maps

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server framework
- TypeScript throughout the backend codebase
- Custom middleware for request logging and JSON body parsing

**API Design**
- RESTful API endpoints under `/api` prefix
- Currently implements two endpoints:
  - `POST /api/bookings` - Create new booking
  - `GET /api/bookings` - Retrieve all bookings
- Request validation using Zod schemas from shared schema definitions

**Development vs Production**
- Development: Vite dev server integrated via middleware for HMR
- Production: Static file serving from built `dist/public` directory
- Environment-aware configuration using `NODE_ENV`

### Data Storage Solutions

**Current Implementation**
- **In-Memory Storage** (`MemStorage` class) for development/demo purposes
- Stores users and bookings in JavaScript Maps
- Generates UUIDs for entity IDs using Node's crypto module

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL
- Schema definitions in `shared/schema.ts` using Drizzle's table builders
- Database configuration in `drizzle.config.ts` points to PostgreSQL via `DATABASE_URL`
- Tables defined:
  - `bookings`: id, name, phone, preferredDate, serviceType, message, createdAt
  - `users`: id, username, password (for potential admin functionality)

**Migration Strategy**
- Drizzle Kit for schema migrations
- Migration files output to `./migrations` directory
- `npm run db:push` script for pushing schema changes

**Design Decision**: The application uses in-memory storage by default but has PostgreSQL/Drizzle configuration ready. This allows for easy development without database setup, while production deployments can use the database by switching the storage implementation and running migrations.

### Authentication and Authorization

**Current State**
- User schema exists with username/password fields
- No active authentication implementation in routes
- Foundation laid for future admin panel access control

**Future Considerations**
- Session-based authentication with `connect-pg-simple` (already included in dependencies)
- Express sessions for maintaining admin login state
- Password hashing recommended before production use

### Code Organization Patterns

**Shared Code**
- `shared/schema.ts` contains Drizzle table definitions and Zod schemas
- Type exports (`InsertBooking`, `Booking`, `InsertUser`, `User`) shared between client and server
- Path aliases configured in `tsconfig.json`:
  - `@/*` → `client/src/*`
  - `@shared/*` → `shared/*`
  - `@assets/*` → `attached_assets/*`

**Module System**
- ES Modules throughout (type: "module" in package.json)
- Consistent use of `.ts` and `.tsx` extensions with `allowImportingTsExtensions`

**Build Process**
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js` with external packages
- Single production start command runs bundled server

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL driver optimized for serverless environments
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-zod**: Generates Zod schemas from Drizzle tables
- **express**: Web application framework
- **react** & **react-dom**: UI library
- **wouter**: Lightweight routing library

### UI Component Libraries
- **@radix-ui/** packages: Unstyled, accessible component primitives (accordion, dialog, dropdown, select, toast, etc.)
- **class-variance-authority**: Utility for creating variant-based component APIs
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets (used for social media icons)

### Form & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **zod**: Schema validation library

### Data Fetching
- **@tanstack/react-query**: Server state management and async data fetching

### Styling
- **tailwindcss**: Utility-first CSS framework
- **tailwind-merge**: Utility for merging Tailwind classes
- **clsx**: Conditional className construction
- **autoprefixer** & **postcss**: CSS processing

### Development Tools
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: Vite plugin for React
- **@replit/** plugins: Replit-specific development enhancements
- **typescript**: Type checking
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Server bundling

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **connect-pg-simple**: PostgreSQL session store (prepared for future use)

### Asset Management
- Images stored in `attached_assets/generated_images/` directory
- Imported directly into React components via Vite's asset handling
- Includes mehndi and tattoo design images for services and gallery