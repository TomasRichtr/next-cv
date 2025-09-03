import PageWrapper from "@/components/layout/page-wrapper";
import Card from "@/components/utils/card";

interface ContactInfoProps {
  t: (key: string) => string;
}

const CONTACTS_INFO = Object.freeze([
  {
    text: "Tomáš Richtr",
    icon: "icon-[tabler--user]",
    size: "default",
  },
  {
    icon: "icon-[tabler--phone]",
    text: "00 420 778 540 970",
    href: "tel:00420778540970",
  },
  {
    icon: "icon-[tabler--brand-mailgun]",
    text: "t.richtr@email.cz",
    href: "mailto:t.richtr@email.cz",
  },
  {
    icon: "icon-[tabler--brand-linkedin]",
    text: "linkedin.com/in/trichtr",
    href: "https://linkedin.com/in/trichtr",
  },
  {
    icon: "icon-[tabler--user]",
    text: "github.com/TomasRichtr",
    href: "https://github.com/TomasRichtr",
  },
]);

const AboutMeCard = () => {
  return (
    <Card
      className="max-w-md bg-info"
    >
      <div
        className="flex flex-col gap-10"
      >
        {CONTACTS_INFO.map((contact, i) => (
          <div
            key={contact.text}
            className="flex gap-x-2 items-center"
          >
            <a
              href={contact.href}
              className="btn btn-primary btn-circle"
              target={contact.href ? "_blank" : undefined}
            >
              <span
                className={`${contact.icon}`}
              />
            </a>
            {i === 0 ? (
              <span
                className="px-0 ml-2"
              >
                {contact.text}
              </span>
            ) : (
              <a
                href={contact.href}
                target="_blank"
                className="link px-0 ml-2"
              >
                {contact.text}
              </a>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AboutMeCard;
