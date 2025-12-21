# Somerville Dental Client

A modern, responsive website for Somerville Dental Associates built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive for all devices
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- ✨ Framer Motion for animations (ready to use)
- 🖼️ Optimized images with Next.js Image component

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── AboutUs.tsx         # About us section
│   ├── Services.tsx        # Services grid
│   ├── Features.tsx        # Features section
│   ├── Testimonials.tsx    # Testimonials carousel
│   └── Footer.tsx          # Footer with contact info
└── public/                 # Static assets
```

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library (included but not yet used)

## Customization

The website uses a custom color palette based on the dental practice's brand:
- Primary: Dark Blue (#2563eb)
- Secondary: Gray scale

You can modify colors in `tailwind.config.ts` to match your brand.

