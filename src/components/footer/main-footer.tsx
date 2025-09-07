import {
  APP_TITLE_SHORT,
  NAME,
} from "@/constants";
import {
  CONTACTS_INFO,
} from "@/constants/cv";

interface MainFooterProps {
  t: (key: string) => string;
}

const MainFooter = ({
  t,
}: MainFooterProps) => {
  const contactLinks = CONTACTS_INFO.filter(contact => contact.href);

  return (
    <footer
      className="bg-base-20 border-t bg-base-200 border-base-content px-6 py-4 gap-2"
    >
      <div
        className="flex justify-between items-center w-full md:w-auto"
      >
        <div
          className="flex gap-1"
        >
          <span>
            ©2025
          </span>
          <span
            className="font-medium flex gap-1"
          >
            <span>
              /
            </span>
            <span
              className="hidden md:inline"
            >
              {NAME}
            </span>
            <span
              className="inline md:hidden"
            >
              {APP_TITLE_SHORT}
            </span>
          </span>
        </div>

        <div
          className="flex gap-2 md:gap-4 items-center justify-center sm:justify-end"
        >
          {contactLinks.map((contact) => (
            <a
              key={contact.text}
              href={contact.href}
              className="link flex items-center"
              aria-label={contact.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className={`${contact.icon} size-5`}
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          data-cc="show-preferencesModal"
          className="link text-sm hidden md:inline"
        >
          {t("modal.manageCookiePreferences")}
        </button>
      </div>
      <div
        className="justify-end flex md:hidden mt-2"
      >
        <button
          type="button"
          data-cc="show-preferencesModal"
          className="link text-sm"
        >
          {t("modal.manageCookiePreferences")}
        </button>
      </div>
    </footer>
  );
};

export default MainFooter;
