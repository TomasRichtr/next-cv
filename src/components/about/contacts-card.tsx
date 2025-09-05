import Card from "@/components/utils/card";
import {
  CONTACTS_INFO,
} from "@/constants/cv";

const ContactsCard = () => {
  return (
    <Card
      className="lg:max-w-sm p-8 h-fit lg:translate-x-1/4 lg:translate-y-1/5"
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
              className={`btn btn-primary btn-circle p-2 ${i === 0 ? "size-16" : "size-10 ml-3"}`}
              target={contact.href ? "_blank" : undefined}
            >
              <span
                className={`${contact.icon} ${i === 0 ? "size-16" : "size-10"}`}
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
                className="link px-0 ml-5"
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

export default ContactsCard;
