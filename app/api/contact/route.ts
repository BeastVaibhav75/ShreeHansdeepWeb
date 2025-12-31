import { NextRequest, NextResponse } from "next/server";

const RECIPIENT_EMAIL = "shreehansdeep94@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, requirementType, message, companyName, contactPerson, industry, quantity } = body;

    // Format email content
    const isB2B = !!companyName;
    const subject = isB2B 
      ? `B2B Inquiry from ${companyName || name}`
      : `Inquiry from ${name}`;

    const emailBody = isB2B
      ? `
New B2B Inquiry Received

Company Details:
- Company Name: ${companyName || "N/A"}
- Contact Person: ${contactPerson || name}
- Industry: ${industry || "N/A"}
- Phone: ${phone}
- Email: ${email}

Requirement Details:
- Requirement Type: ${requirementType || "N/A"}
- Estimated Quantity: ${quantity || "Not specified"}

Message:
${message || "No message provided"}

---
This inquiry was submitted through the website contact form.
      `.trim()
      : `
New Inquiry Received

Contact Details:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}
- Requirement Type: ${requirementType || "N/A"}

Message:
${message || "No message provided"}

---
This inquiry was submitted through the website contact form.
      `.trim();

    // In production, you would use an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    
    // For now, we'll log it and return success
    // You can integrate with an email service later
    console.log("=== NEW INQUIRY ===");
    console.log("To:", RECIPIENT_EMAIL);
    console.log("Subject:", subject);
    console.log("Body:", emailBody);
    console.log("===================");

    // TODO: Integrate with email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@yourdomain.com',
    //   to: RECIPIENT_EMAIL,
    //   subject: subject,
    //   text: emailBody,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: "Your inquiry has been submitted successfully. We'll get back to you soon!" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "There was an error submitting your inquiry. Please try again or contact us directly." 
      },
      { status: 500 }
    );
  }
}

