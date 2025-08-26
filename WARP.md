# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Chitrakaar is an AI-powered image generation application built with React + Vite frontend and Express.js backend. It enables users to generate images using Stable Diffusion AI models via Hugging Face API and share them with the community. Generated images are stored in Cloudinary and metadata is managed through MongoDB.

## Common Development Commands

### Client (Frontend - React + Vite)
```powershell
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Server (Backend - Express.js)
```powershell
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start development server with auto-reload (http://localhost:8080)
npm start
```

### Full Stack Development
```powershell
# Run both client and server concurrently (from root directory)
# Client: cd client && npm run dev
# Server: cd server && npm start
```

## Architecture Overview

### Frontend Structure
- **Framework**: React 18 with Vite for fast development and building
- **Routing**: React Router DOM for navigation between Home and CreateImage pages
- **Styling**: TailwindCSS for utility-first styling
- **Key Pages**:
  - `Home`: Displays community showcase of generated images with search functionality
  - `CreateImage`: AI image generation interface with prompt input and sharing capabilities
- **Components**: Modular components (Card, FormField, Loader) for reusable UI elements
- **State Management**: Local React state for form handling, loading states, and search functionality

### Backend Structure
- **Framework**: Express.js with ES6 modules
- **API Routes**:
  - `/api/v1/image` - CRUD operations for image posts (GET all, POST create)
  - `/api/v1/generation` - AI image generation using Hugging Face Stable Diffusion API
- **Database**: MongoDB with Mongoose ODM for storing image metadata (name, prompt, photo URL)
- **File Storage**: Cloudinary integration for image hosting and management
- **AI Integration**: Hugging Face API with Stable Diffusion 3.5 Large model for image generation

### Key Environment Variables (Server)
- `MONGODB_URL` - MongoDB connection string
- `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` - Cloudinary configuration
- `HUGGING_FACE_TOKEN` - Hugging Face API token for Stable Diffusion

### Data Flow
1. User enters prompt in CreateImage component
2. Frontend calls `/api/v1/generation` endpoint with prompt
3. Server processes request through Hugging Face Stable Diffusion API
4. Generated image (base64) is returned to frontend for preview
5. User can share image, triggering upload to Cloudinary and metadata storage in MongoDB
6. Home page fetches and displays all shared images with search capability

### API Integration Notes
- The application uses Hugging Face's Stable Diffusion 3.5 Large model instead of OpenAI DALL-E
- Images are generated in base64 format and converted for frontend display
- Production API endpoints point to `https://chitrakaar.onrender.com`
- Local development uses `http://localhost:8080`

### Component Architecture
- **Reusable Components**: Card (image display), FormField (input handling), Loader (loading states)
- **Utility Functions**: Random prompt generation from curated list, image download functionality
- **Constants**: 50+ curated AI prompts for "Surprise Me" feature

### Development Notes
- Frontend and backend run as separate services during development
- CORS enabled for cross-origin requests between frontend and backend
- File upload size limit set to 50MB for large image handling
- Search functionality filters by both creator name and image prompt
- Responsive design with TailwindCSS grid system for different screen sizes
