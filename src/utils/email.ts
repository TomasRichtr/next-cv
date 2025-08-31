import nodemailer from "nodemailer";

import {
  NewMessage,
} from "@/types/message";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (mailOptions:{from: string, to: string, subject: string, text: string}) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${ info.response}`);
    return info.response;
  }
  catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};

export const buildSubject = (id: number, message: NewMessage) => {
  let messageSubject = `from: ${message.email}, ${message.name}, id: ${id}`;
  if (message.company_name) messageSubject = `${messageSubject } / ${message.company_name}`;
  if (message.phone) messageSubject = `${messageSubject } / ${message.phone}`;
  return messageSubject;
};
