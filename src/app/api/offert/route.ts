
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';


export async function POST(request: NextRequest) {
    const formData = await request.json();
  
    const email = process.env.EMAIL;
    const pass = process.env.PASSWORD;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass,
      },
    });
  
    const mailOptions = {
      from: email,
      to: email,
      replyTo: formData.email,
      subject: formData.fullName + formData.phoneNumber,
      text: formData.order,
      
    };
  
    await transporter.sendMail(mailOptions);
  
    return NextResponse.json({ message: "Success" }, { status: 200 });
  }
