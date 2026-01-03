import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "shreehansdeep94@gmail.com";
const SENDER_EMAIL = "shreehansdeep94@gmail.com";
const APP_PASSWORD = "vbve sujh yphm tebs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, requirementType, message, companyName, contactPerson, industry, quantity } = body;

    // Format email content
    const isB2B = !!companyName;
    const subject = isB2B 
      ? `B2B Inquiry from ${companyName || name}`
      : `Inquiry from ${name}`;

    const tableRows = isB2B
      ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company Name</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${companyName || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Contact Person</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${contactPerson || name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Industry</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${industry || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Requirement Type</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${requirementType || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Estimated Quantity</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${quantity || "Not specified"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${message || "No message provided"}</td>
        </tr>
      `
      : `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Requirement Type</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${requirementType || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${message || "No message provided"}</td>
        </tr>
      `;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">${isB2B ? "New B2B Inquiry Received" : "New Inquiry Received"}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
          This inquiry was submitted through the SHD website contact form.
        </p>
      </div>
    `;

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER_EMAIL,
        pass: APP_PASSWORD,
      },
    });

    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"SHD Website" <${SENDER_EMAIL}>`, // sender address
      to: RECIPIENT_EMAIL, // list of receivers
      subject: subject, // Subject line
      html: emailHtml, // html body
    });

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

