# SEO Setup Guide

This document outlines the SEO implementation for Shree Hans Deep Wood Works & Saw Mills website.

## ✅ What's Been Implemented

### 1. **Enhanced Metadata**
- ✅ Complete metadata in root layout with title, description, keywords
- ✅ OpenGraph tags for social media sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs for all pages
- ✅ Page-specific metadata for all routes

### 2. **Structured Data (Schema.org)**
- ✅ LocalBusiness schema with:
  - Business name, description, contact info
  - Address and geolocation
  - Opening hours
  - Products/services offered
  - Area served

### 3. **Technical SEO**
- ✅ `robots.txt` file for search engine crawlers
- ✅ Dynamic `sitemap.xml` generation
- ✅ Proper HTML lang attribute
- ✅ Mobile-responsive design (already implemented)

## 📋 Next Steps for Better SEO

### 1. **Environment Variable**
Add your actual domain to `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. **Google Search Console**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Verify ownership (add verification code to `app/layout.tsx` metadata.verification.google)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### 3. **Google Business Profile**
- Create/claim your Google Business Profile
- Add business information matching your website
- Get reviews from customers
- Add photos of your products and workspace

### 4. **OpenGraph Image**
Create an OpenGraph image (1200x630px) and save it as:
- `public/images/og-image.jpg`

This image appears when your site is shared on social media.

### 5. **Content Optimization**
- ✅ Use descriptive headings (H1, H2, H3)
- ✅ Add alt text to all images (check existing images)
- ✅ Use internal linking between pages
- ✅ Create unique, valuable content on each page

### 6. **Page Speed**
- ✅ Images are optimized with Next.js Image component
- Consider: Enable image optimization, use WebP format
- Test with [PageSpeed Insights](https://pagespeed.web.dev/)

### 7. **Local SEO**
- ✅ Business address and phone in structured data
- ✅ Location mentioned in content
- Add: Local citations (business directories)
- Add: Location-specific keywords

### 8. **Analytics**
Set up:
- Google Analytics 4
- Google Tag Manager (optional)

### 9. **Backlinks**
- Get listed in local business directories
- Partner with suppliers/customers for backlinks
- Create valuable content that others want to link to

### 10. **Regular Updates**
- Update sitemap when adding new pages
- Keep content fresh and relevant
- Monitor Search Console for issues
- Track rankings for target keywords

## 🔍 Target Keywords

Primary keywords to focus on:
- Wood furniture Haryana
- Office furniture manufacturer
- Industrial packing materials
- Custom woodwork
- Saw mills Haryana
- B2B furniture solutions
- Wooden pallets manufacturer

## 📊 Monitoring

Tools to use:
1. **Google Search Console** - Monitor search performance
2. **Google Analytics** - Track website traffic
3. **Google Business Profile** - Local search visibility
4. **Bing Webmaster Tools** - Additional search engine

## 🚀 Quick Wins

1. **Add OpenGraph image** - Immediate visual improvement for social shares
2. **Submit to Google Search Console** - Start tracking performance
3. **Claim Google Business Profile** - Appear in local searches
4. **Get customer reviews** - Build trust and local SEO
5. **Add more content** - Blog posts about woodworking, furniture care, etc.

## 📝 Notes

- The sitemap is automatically generated at `/sitemap.xml`
- Robots.txt is at `/robots.txt`
- Structured data is in the root layout (JSON-LD format)
- All pages have unique metadata and canonical URLs

## 🛠️ Maintenance

- Review and update metadata quarterly
- Monitor Search Console monthly
- Update sitemap when adding new pages (automatic)
- Keep content fresh and relevant
- Respond to customer reviews


