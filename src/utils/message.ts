import {
  NewMessage,
} from "@/types/message";

// Admin email templates (English only)
const adminSubjectTemplate = "New Message - ID: {messageId}";
const adminTextTemplate = `New message received:

Name: {name}
Email: {email}
{company}
{phone}

Message:
{message}

Message ID: {messageId}`;

// User email templates
const userEmailContent = {
  en: {
    subject: "Message Received - Thank You",
    text: `Dear {name},

Thank you for your message. We have received your inquiry and will get back to you as soon as possible.

Your message:
{message}

Best regards,
The Team`,
  },
  cs: {
    subject: "Zpráva přijata - Děkujeme",
    text: `Vážený {name},

Děkujeme za vaši zprávu. Obdrželi jsme váš dotaz a ozveme se vám co nejdříve.

Vaše zpráva:
{message}

S pozdravem,
Tým`,
  },
};

export const buildAdminEmail = (locale: string, messageId: number, newMessage: NewMessage) => {
  const subject = adminSubjectTemplate.replace("{messageId}", messageId.toString());
  const text = adminTextTemplate
    .replace("{name}", newMessage.name!)
    .replace("{email}", newMessage.email!)
    .replace("{company}", newMessage.company_name ? `Company: ${newMessage.company_name}` : "")
    .replace("{phone}", newMessage.phone ? `Phone: ${newMessage.phone}` : "")
    .replace("{message}", newMessage.message!)
    .replace("{messageId}", messageId.toString());

  return {
    subject,
    text,
  };
};

export const buildUserEmail = (locale: string, newMessage: NewMessage) => {
  const content = userEmailContent[locale as keyof typeof userEmailContent] || userEmailContent.en;
  const subject = content.subject;
  const text = content.text
    .replace("{name}", newMessage.name!)
    .replace("{message}", newMessage.message!);

  return {
    subject,
    text,
  };
};
