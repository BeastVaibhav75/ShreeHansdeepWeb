# Images Directory

This directory contains all images for the website.

## Directory Structure

```
images/
├── products/          # Product images
├── portfolio/         # Portfolio/gallery images
└── categories/        # Category banner images
```

## Adding Product Images

1. Add product images to `products/` directory
2. Name them according to the product ID in `data/products.ts`
   - Example: `sofa-set.jpg` for product ID `hf-1`
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
4. Recommended size: 800x600px or larger (aspect ratio 4:3)

## Adding Portfolio Images

1. Add portfolio images to `portfolio/` directory
2. Name them according to the image ID in `app/portfolio/page.tsx`
   - Example: `sofa-1.jpg`, `dining-2.jpg`, etc.
3. Recommended size: 1200x800px or larger

## Current Setup

The website currently uses Unsplash placeholder images for demonstration. To use your own images:

1. Replace the image URLs in:
   - `data/products.ts` - Change image paths to `/images/products/[filename]`
   - `app/page.tsx` - Update category images
   - `app/portfolio/page.tsx` - Update portfolio image paths

2. The components are already set up with:
   - Automatic fallback to emoji icons if images fail to load
   - Next.js Image optimization
   - Responsive image sizing

## Image Optimization

All images are automatically optimized by Next.js:
- Automatic WebP/AVIF format conversion
- Responsive image sizing
- Lazy loading
- Blur placeholder support


