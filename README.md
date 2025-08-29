# Clarivo AI Analytics Platform

A premium website for AI-powered data analysis tool with advanced animations and cyberpunk-datafusion design.

## 🚀 Features

- **Modern Design**: Cyberpunk-datafusion aesthetic with Neo-Brutalist elements
- **Advanced Animations**: GSAP ScrollTrigger, Lenis Smooth Scroll, Three.js, Framer Motion
- **Responsive Design**: Mobile-first approach with glass-morphism components
- **Performance Optimized**: Next.js 14+ with optimized loading and caching
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: 
  - GSAP for advanced animations
  - Framer Motion for React components
  - Lenis for smooth scrolling
  - Three.js for 3D visualizations
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display, JetBrains Mono

## 🎨 Design System

### Color Palette
- **Primary**: `#0a2463` - Deep Blue
- **Secondary**: `#3e92cc` - Light Blue
- **Accent**: `#d8315b` - Pink/Red
- **Accent Secondary**: `#2dcce0` - Cyan
- **Neutral Dark**: `#1a1a25` - Dark Background
- **Neutral Light**: `#f8f9fa` - Light Text

### Typography
- **Primary**: Inter (sans-serif)
- **Secondary**: Playfair Display (serif)
- **Accent**: JetBrains Mono (monospace)

## 📁 Project Structure

```
clarivo/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── features/
│   │   └── page.tsx       # Features page
│   ├── careers/
│   │   └── page.tsx       # Careers page
│   └── contact/
│       └── page.tsx       # Contact page
├── components/            # Reusable components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Hero with Three.js
│   ├── VideoShowcase.tsx  # Video demo section
│   ├── FeatureHighlights.tsx # Features grid
│   └── StatsShowcase.tsx  # Animated statistics
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript config
└── next.config.js        # Next.js configuration
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 📱 Pages

### Home Page
- **Hero Section**: Three.js animated data visualization with gradient text effects
- **Video Showcase**: Interactive demo mockup with floating feature callouts
- **Feature Highlights**: 6-card grid with hover animations and gradient icons
- **Stats Showcase**: Animated counters with progress bars

### About Page
- **Mission Statement**: Company story and values
- **Timeline**: Interactive milestone progression
- **Team Section**: Team member cards with gradient avatars
- **Values Grid**: Core principles with animated icons

### Features Page
- **Detailed Features**: Alternating layout with demo mockups
- **Integrations**: Supported platforms and tools
- **Interactive Elements**: Hover effects and animations

### Careers Page
- **Company Values**: Culture and principles
- **Open Positions**: Current job opportunities
- **Benefits**: Perks and culture highlights
- **Application Process**: How to apply

### Contact Page
- **Contact Form**: Multi-field form with validation
- **Contact Methods**: Social links and communication options
- **FAQ Section**: Expandable accordion with common questions

## 🎯 Key Components

### Navigation
- **Glass-morphism header** that becomes opaque on scroll
- **Animated logo** with hover effects
- **Mobile-responsive** hamburger menu
- **Smooth transitions** between states

### Three.js Hero
- **Particle System**: 2000+ animated particles in brand colors
- **Interactive Animation**: Continuous rotation and wave effects
- **Responsive Canvas**: Adapts to screen size changes
- **Performance Optimized**: Efficient rendering and cleanup

### Animations
- **Scroll-triggered animations** using GSAP ScrollTrigger
- **Staggered reveals** for content sections
- **Smooth scrolling** with Lenis
- **Hover micro-interactions** throughout

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:
```typescript
colors: {
  primary: '#0a2463',
  secondary: '#3e92cc',
  accent: '#d8315b',
  // ... other colors
}
```

### Typography
Fonts are loaded via Google Fonts in `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Playfair+Display:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

### Animations
GSAP and Framer Motion configurations can be adjusted in individual components.

## 📦 Build & Deploy

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

3. **Lint Code**
   ```bash
   npm run lint
   ```

## 🌟 Performance Features

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display swap
- **Lazy Loading**: Components load on demand
- **Smooth Animations**: 60fps animations with proper cleanup

## 🎨 Design Principles

1. **Cyberpunk Aesthetic**: Dark themes with neon accents
2. **Glass-morphism**: Translucent elements with backdrop blur
3. **Data-inspired**: Visualizations reflect the product's purpose
4. **Accessibility First**: WCAG compliant design and interactions
5. **Mobile-first**: Responsive design starting from mobile breakpoints

## 🤝 Contributing

This is a complete, production-ready website for the Clarivo AI Analytics Platform. All major components and pages are implemented with modern React patterns and best practices.

## 📄 License

Built for Clarivo AI - All rights reserved.