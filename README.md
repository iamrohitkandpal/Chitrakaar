# 🎨 Chitrakaar

<div align="center">

![Chitrakaar Banner](https://via.placeholder.com/800x200/6366F1/FFFFFF?text=🎨+Chitrakaar+-+AI+Art+Generator)

**Transform your imagination into stunning visuals with the power of AI**

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Powered%20by-Node.js-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![AI by Stable Diffusion](https://img.shields.io/badge/AI%20by-Stable%20Diffusion-FF6B6B?style=for-the-badge&logo=artificial-intelligence)](https://huggingface.co/stable-diffusion-v1-5)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🚀 Live Demo](https://chitrakaar.onrender.com) • [📖 Documentation](#-documentation) • [🛠️ Installation](#%EF%B8%8F-installation) • [🎯 Features](#-features)

</div>

---

## ✨ About Chitrakaar

**Chitrakaar** (Sanskrit: चित्रकार, meaning "Artist") is a cutting-edge AI-powered image generation platform that transforms your textual descriptions into breathtaking visual artworks. Built with modern web technologies and powered by Stable Diffusion, Chitrakaar makes AI art creation accessible, beautiful, and fun.

### 🌟 Why Chitrakaar?

- **🎨 Creative Freedom**: Generate unlimited unique artworks from simple text descriptions
- **🌙 Beautiful UI**: Stunning light/dark themes with smooth animations
- **🚀 Lightning Fast**: Optimized for performance with modern React and Vite
- **👥 Community Driven**: Share your creations and discover amazing art from others
- **📱 Responsive**: Perfect experience across all devices
- **🔧 Developer Friendly**: Clean, well-documented codebase

---

## 🎯 Features

<div align="center">

### 🖼️ **AI Image Generation**
Create stunning artworks using Stable Diffusion v1.5
*Transform text prompts into visual masterpieces*

### 🌙 **Dark/Light Themes**
Beautiful, smooth theme transitions with system preference detection
*Your eyes will thank you*

### 👥 **Community Showcase**
Discover and share amazing AI-generated artwork
*Get inspired by the community*

### 🔍 **Smart Search**
Find artworks by artist name or description
*Discover exactly what you're looking for*

### 📱 **Fully Responsive**
Perfect experience on desktop, tablet, and mobile
*Art creation anywhere, anytime*

### ⚡ **Real-time Feedback**
Live character counts, validation, and error handling
*Know exactly what's happening*

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | AI | Database | Cloud |
|----------|---------|-----|----------|-------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | ![Stable Diffusion](https://img.shields.io/badge/Stable_Diffusion-FF6B6B?style=for-the-badge) | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) | ![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![CORS](https://img.shields.io/badge/CORS-FF6B6B?style=for-the-badge) | | | |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) | ![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge) | | | |

</div>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud)

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chitrakaar.git
   cd chitrakaar
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   **Server** (`server/.env`):
   ```env
   # MongoDB connection string
   MONGODB_URL=mongodb://localhost:27017/chitrakaar
   
   # Cloudinary configuration
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Hugging Face API Token
   HUGGING_FACE_TOKEN=your_hugging_face_token
   
   # Server port (optional)
   PORT=8080
   ```

   **Client** (`client/.env`) - Optional:
   ```env
   # API base URL for production deployment
   VITE_API_BASE_URL=https://your-deployment-url.com
   ```

5. **Start the development servers**

   **Terminal 1 - Server:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Client:**
   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser**
   Visit `http://localhost:5173` to see Chitrakaar in action! 🎉

---

## 🔑 API Keys Setup

### 🤗 Hugging Face API Token
1. Visit [Hugging Face](https://huggingface.co)
2. Sign up/Login to your account
3. Go to **Settings** → **Access Tokens**
4. Create a new token with **Read** permissions
5. Copy the token to your `.env` file

### ☁️ Cloudinary Setup
1. Visit [Cloudinary](https://cloudinary.com)
2. Sign up for a free account
3. Go to your **Dashboard**
4. Copy **Cloud Name**, **API Key**, and **API Secret**
5. Add them to your `.env` file

### 🗄️ MongoDB Setup
- **Local**: Install MongoDB locally and use `mongodb://localhost:27017/chitrakaar`
- **Cloud**: Use [MongoDB Atlas](https://www.mongodb.com/atlas) for a cloud database

---

## 📁 Project Structure

```
chitrakaar/
├── 📁 client/                    # React frontend
│   ├── 📁 public/               # Static assets
│   ├── 📁 src/
│   │   ├── 📁 assets/           # Images, icons
│   │   ├── 📁 components/       # Reusable components
│   │   │   ├── Card.jsx         # Image card component
│   │   │   ├── FormField.jsx    # Input field component
│   │   │   ├── Loader.jsx       # Loading component
│   │   │   └── ThemeToggle.jsx  # Theme switch component
│   │   ├── 📁 context/          # React contexts
│   │   │   └── ThemeContext.jsx # Theme management
│   │   ├── 📁 pages/            # Main pages
│   │   │   ├── Home.jsx         # Gallery/showcase page
│   │   │   └── CreateImage.jsx  # Image generation page
│   │   ├── 📁 utils/            # Utility functions
│   │   ├── App.jsx              # Main app component
│   │   ├── config.js            # Configuration
│   │   └── main.jsx             # App entry point
│   ├── package.json
│   ├── tailwind.config.js       # Tailwind CSS config
│   └── vite.config.js           # Vite configuration
├── 📁 server/                   # Express backend
│   ├── 📁 mongodb/              # Database related
│   │   ├── 📁 models/           # Mongoose models
│   │   │   └── images.js        # Image model
│   │   └── connect.js           # Database connection
│   ├── 📁 routes/               # API routes
│   │   ├── imageRoutes.js       # Image CRUD operations
│   │   └── generationRoutes.js  # AI image generation
│   ├── index.js                 # Server entry point
│   └── package.json
├── README.md                    # This file
└── WARP.md                     # Warp AI development guide
```

---

## 🎨 Usage Guide

### Creating Your First Artwork

1. **Navigate to Create Page**
   Click the "Create" button in the header

2. **Enter Your Details**
   - Add your artist name
   - Write a detailed prompt describing your vision

3. **Generate Image**
   Click "Generate Image" and watch the magic happen!

4. **Share with Community**
   Love your creation? Share it with others!

### 💡 Pro Tips for Better Prompts

- **Be Specific**: Include details about style, colors, lighting, and mood
- **Add Artistic Styles**: "oil painting", "digital art", "photorealistic"
- **Mention Composition**: "close-up", "wide angle", "bird's eye view"
- **Include Quality Modifiers**: "highly detailed", "4K", "masterpiece"

**Example Prompts:**
```
✨ "A majestic dragon soaring through cotton candy clouds at sunset, digital art, highly detailed, vibrant colors"

🌙 "Cozy coffee shop in a magical forest, warm lighting, oil painting style, enchanted atmosphere"

🏰 "Futuristic cityscape with flying cars, neon lights, cyberpunk style, wide angle, 4K quality"
```

---

## 🌙 Theme System

Chitrakaar features a beautiful dual-theme system:

### 🌞 Light Theme
- Clean white backgrounds
- Subtle gray borders
- Professional blue accents
- Perfect for daytime use

### 🌙 Dark Theme
- Rich dark backgrounds
- Glowing blue highlights
- Enhanced contrast
- Easy on the eyes

**Theme Features:**
- ⚡ Automatic system preference detection
- 💾 Persistent theme storage
- 🎭 Smooth animations between themes
- 📱 Consistent across all devices

---

## 🚀 Deployment

### Production Build

1. **Build the client**
   ```bash
   cd client
   npm run build
   ```

2. **Set environment variables** for production

3. **Deploy backend** to your preferred platform (Render, Railway, etc.)

4. **Deploy frontend** to static hosting (Vercel, Netlify, etc.)

### Environment Variables for Production

Make sure to set all required environment variables in your deployment platform:
- `MONGODB_URL`
- `CLOUDINARY_NAME`
- `CLOUDINARY_API_KEY` 
- `CLOUDINARY_API_SECRET`
- `HUGGING_FACE_TOKEN`
- `PORT` (usually auto-assigned)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🐛 Bug Reports
Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

### 💡 Feature Requests
Have an idea? We'd love to hear it! Please include:
- Clear description of the feature
- Use cases and benefits
- Mockups or examples (if applicable)

### 🛠️ Pull Requests
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Stable Diffusion** team for the amazing AI model
- **Hugging Face** for hosting the model API
- **React** and **Vite** teams for excellent development tools
- **Tailwind CSS** for the beautiful styling system
- **MongoDB** and **Cloudinary** for reliable infrastructure

---

## 📞 Support

Need help? We're here for you!

- 📧 **Email**: support@chitrakaar.com
- 💬 **Discord**: [Join our community](https://discord.gg/chitrakaar)
- 🐦 **Twitter**: [@Chitrakaar](https://twitter.com/chitrakaar)
- 📖 **Documentation**: [docs.chitrakaar.com](https://docs.chitrakaar.com)

---

<div align="center">

### 🌟 Star this repository if you found it helpful!

**Made with ❤️ by the Chitrakaar Team**

[⬆ Back to Top](#-chitrakaar)

</div>
