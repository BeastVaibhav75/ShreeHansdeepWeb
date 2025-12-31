# Shree Hans Deep Wood Works & Saw Mills - Business Website

A professional, modern business website built with Next.js (App Router) for Shree Hans Deep Wood Works & Saw Mills. This website showcases the company's products and services, including furniture manufacturing, industrial packing materials, custom woodwork, and metal works.

## 🚀 Features

- **Modern Design**: Professional, industrial + premium furniture aesthetic
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Smooth Animations**: Framer Motion for engaging user experience
- **Product Catalog**: Comprehensive catalog with 5 main categories
- **Inquiry System**: Contact forms for lead generation
- **Portfolio Gallery**: Showcase of completed projects
- **WhatsApp Integration**: Direct WhatsApp chat button
- **Google Maps**: Embedded location map

## 📦 Product Categories

1. **Home Furniture** - Sofa sets, dining tables, beds, wardrobes, etc.
2. **Office Furniture** - Executive chairs, workstations, conference tables, etc.
3. **Factory & Industrial Items** - Packing materials, pallets, crates, storage racks
4. **Custom Woodwork** - Modular furniture, CNC panels, interior woodwork
5. **Metal Works (M.S. & S.S.)** - Railings, fabrication, industrial frames

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Next/Image** for optimized images

## 📁 Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── catalog/        # Product catalog page
│   ├── contact/        # Contact & inquiry page
│   ├── portfolio/      # Portfolio/gallery page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── ProductCard.tsx # Product card component
│   └── InquiryForm.tsx # Contact form component
├── data/
│   └── products.ts     # Product data
└── public/
    └── images/         # Image assets (to be added)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Configuration

### Update Contact Information

Edit the following files to update contact details:
- `components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details
- `components/Header.tsx` - Phone number in WhatsApp link

### Update Google Maps

Replace the Google Maps embed URL in `app/contact/page.tsx` with your actual location coordinates.

### Add Product Images

1. Add product images to `public/images/products/`
2. Update image paths in `data/products.ts`
3. Uncomment the Image components in `components/ProductCard.tsx`

## 🌐 Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

The website is optimized for Vercel deployment with:
- Automatic image optimization
- Edge functions support
- Fast global CDN

## 📄 Pages

- **Home** (`/`) - Hero section, product highlights, key strengths
- **About Us** (`/about`) - Company story, expertise, vision
- **Catalog** (`/catalog`) - Complete product catalog with filtering
- **Portfolio** (`/portfolio`) - Gallery of completed projects
- **Contact** (`/contact`) - Inquiry form, contact info, Google Maps

## 🎨 Design System

### Colors
- **Wood Browns**: Primary wood tones
- **Forest Green**: Accent color for CTAs
- **Charcoal**: Text and dark elements
- **Beige**: Background tones

### Typography
- Modern sans-serif (Inter font)
- Clean, readable hierarchy

## ⚠️ Important Notes

- This is **NOT an e-commerce platform**
- No shopping cart or checkout functionality
- Focus is on catalog display and lead generation
- All product inquiries go through contact forms

## 📞 Support

For questions or support, contact:
- Email: shreehansdeep94@gmail.com
- Phone: 01274-261129, +91 98121 25410, +91 94660 22823
- WhatsApp: +91 94660 22823
- Location: Near NH-48, Rewari Road, Kasola Chowk, Haryana

## 📄 License

© 2024 Shree Hans Deep Wood Works & Saw Mills. All rights reserved.

