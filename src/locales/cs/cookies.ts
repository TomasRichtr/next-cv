import {
  COOKIE_CATEGORIES,
} from "@/constants/cookies";

export const CZECH_LOCALES = Object.freeze({
  "consentModal": {
    "title": "Používáme cookies",
    "description": "Používáme cookies pro zlepšení vašeho prohlížení, ukládání preferencí a udržení vaší relace. Prosím vyberte, které cookies chcete přijmout.",
    "acceptAllBtn": "Přijmout vše",
    "acceptNecessaryBtn": "Odmítnout vše",
    "showPreferencesBtn": "Spravovat preference",
  },
  "preferencesModal": {
    "title": "Nastavení cookies",
    "acceptAllBtn": "Uložit preference",
    "acceptNecessaryBtn": "Odmítnout vše",
    "closeIconLabel": "Zavřít modal",
    "sections": [
      {
        "title": "Zásady cookies",
        "description": "Používáme cookies pro zlepšení vašeho zážitku na našich webových stránkách. Všechny cookies jsou uloženy lokálně na vašem zařízení a nejsou sdíleny s třetími stranami. Cookies vyprší po 3 týdnech nečinnosti.",
      },
      {
        "title": "Autentifikační cookies",
        "description": "Tyto cookies vás udržují přihlášené a udržují vaši relaci. Bez těchto cookies byste se museli přihlašovat při každé návštěvě.",
        "linkedCategory": COOKIE_CATEGORIES.AUTHENTICATION,
      },
      {
        "title": "Preferenční cookies",
        "description": "Tyto cookies si pamatují vaše preference webových stránek, jako je výběr tématu a jazykové nastavení, aby vám poskytly personalizovaný zážitek.",
        "linkedCategory": COOKIE_CATEGORIES.PREFERENCES,
      },
    ],
  },
});
