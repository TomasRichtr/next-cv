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
    <div
      className="w-full"
    >
      <footer
        className="footer bg-base-200/60 border-base-content/25 border-t px-6 py-4"
      >
        <div
          className="flex w-full items-center justify-between"
        >
          <aside
            className="grid-flow-col items-center text-sm md:text-base"
          >
            <p>
              ©2024
              <span
                className="font-medium"
              >
                {" "}
                /
                {" "}
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
            </p>
          </aside>
          <div
            className="flex gap-2 md:gap-4 items-center"
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
            <button
              type="button"
              data-cc="show-preferencesModal"
              className="link text-sm"
            >
              {t("modal.manageCookiePreferences")}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
