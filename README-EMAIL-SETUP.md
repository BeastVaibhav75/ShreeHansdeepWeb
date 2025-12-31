# Email Setup Instructions

The contact forms are now configured to send inquiries to: **shreehansdeep94@gmail.com**

## Current Status

The API route (`app/api/contact/route.ts`) is set up and will log form submissions to the console. To actually send emails, you need to integrate with an email service.

## Email Service Options

### Option 1: Resend (Recommended - Easy Setup)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Update `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   await resend.emails.send({
     from: 'website@yourdomain.com',
     to: 'shreehansdeep94@gmail.com',
     subject: subject,
     text: emailBody,
   });
   ```
5. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

### Option 2: Nodemailer (SMTP)

1. Install nodemailer:
   ```bash
   npm install nodemailer
   ```
2. Configure with your email provider (Gmail, Outlook, etc.)
3. Update the API route to use nodemailer

### Option 3: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Install SendGrid SDK
4. Update API route

## Testing

Currently, form submissions are logged to the console. Check your terminal/console when testing forms.

## Contact Information Updated

All contact information has been updated:
- **Phone**: 01274-261129, +91 98121 25410, +91 94660 22823
- **Email**: shreehansdeep94@gmail.com
- **WhatsApp**: +91 94660 22823

All forms will send to: **shreehansdeep94@gmail.com**

