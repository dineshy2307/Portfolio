# Full Stack Developer Portfolio

## Overview

This repository contains a full-stack portfolio application for a software developer, built with modern web technologies. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS with custom CSS variables for dark theme consistency
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: React Query (TanStack Query) for server state and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth interactions and scroll animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between frontend and backend
- **Storage**: Neon serverless PostgreSQL database

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and runtime error overlays
- **Production**: Static file serving with Express.js backend

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with profile image and call-to-action buttons
2. **About Section**: Personal summary with skill progress bars and contact information
3. **Skills Section**: Categorized technical skills with visual organization
4. **Experience Section**: Timeline-based work history with achievements
5. **Projects Section**: Featured projects with technology stacks and descriptions
6. **Education Section**: Academic background and certifications
7. **Contact Section**: Interactive form with validation and submission handling

### UI System
- **Design System**: Consistent color palette with CSS custom properties for theming
- **Component Library**: Reusable UI components following atomic design principles
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Frontend validates data using Zod schemas
3. API request sent to `/api/contact` endpoint
4. Backend validates and stores message in database
5. Success/error response returned to frontend
6. Toast notification displayed to user

### Static Data Management
- Portfolio data stored in TypeScript configuration files
- Shared between components for consistency
- Easy to update and maintain

### Database Schema
- **Users Table**: Basic user management (future extensibility)
- **Contact Messages Table**: Stores form submissions with timestamps
- **Migrations**: Drizzle-based database schema management

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library with consistent design
- **React Icons**: Additional icon sets for branding

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation
- **Drizzle ORM**: Type-safe database operations

### Development Tools
- **TypeScript**: Static type checking
- **Vite**: Build tool and development server
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles Express server with dependencies
3. **Database Migration**: Drizzle pushes schema changes to production database

### Environment Configuration
- **Development**: Local development with hot reloading
- **Production**: Optimized builds with static file serving
- **Database**: Environment-based connection strings

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Static file serving capability
- Environment variable support for database connections

### Performance Optimizations
- Static asset optimization through Vite
- Database query optimization with Drizzle ORM
- Lazy loading for images and components
- Efficient bundle splitting for faster load times

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 01, 2025. Initial setup