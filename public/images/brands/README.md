# Brand Logos

Add your brand logo images here. The marquee component will automatically use them.

## Supported Brands

- Supreme
- Sleepwell
- Kurlon
- Wakefit
- Century
- Godrej
- Nilkamal
- Durian

## Adding Brand Logos

1. Add logo images to this directory (`public/images/brands/`)
2. Name them according to the brand name (lowercase):
   - `supreme.png` or `supreme.jpg`
   - `sleepwell.png` or `sleepwell.jpg`
   - `kurlon.png` or `kurlon.jpg`
   - etc.

3. Update `components/BrandMarquee.tsx`:
   - Change the logo paths from placeholder URLs to `/images/brands/[filename]`
   - Example: `logo: "/images/brands/supreme.png"`

## Image Requirements

- Format: PNG (with transparency) or JPG
- Recommended size: 150x80px or larger
- Aspect ratio: Flexible (logos will be contained)
- Background: Transparent PNG preferred for best results

## Current Setup

The component currently uses placeholder images. Once you add real logos, update the paths in `components/BrandMarquee.tsx`.



