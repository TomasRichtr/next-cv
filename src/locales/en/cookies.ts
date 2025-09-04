import {
  COOKIE_CATEGORIES,
} from "@/constants/cookies";

export const ENGLISH_LOCALES = Object.freeze({
  "consentModal": {
    "title": "We use cookies",
    "description": "We use cookies to enhance your browsing experience, store your preferences, and maintain your session. Please choose which cookies you'd like to accept.",
    "acceptAllBtn": "Accept all",
    "acceptNecessaryBtn": "Reject all",
    "showPreferencesBtn": "Manage preferences",
  },
  "preferencesModal": {
    "title": "Cookie preferences",
    "acceptAllBtn": "Save preferences",
    "acceptNecessaryBtn": "Reject all",
    "closeIconLabel": "Close modal",
    "sections": [
      {
        "title": "Cookie policy",
        "description": "We use cookies to improve your experience on our website. All cookies are stored locally on your device and are not shared with third parties. Cookies expire after 3 weeks of inactivity.",
      },
      {
        "title": "Authentication cookies",
        "description": "These cookies keep you logged in and maintain your session. Without these cookies, you would need to log in again on each visit.",
        "linkedCategory": COOKIE_CATEGORIES.AUTHENTICATION,
      },
      {
        "title": "Preference cookies",
        "description": "These cookies remember your website preferences such as theme selection and language settings to provide a personalized experience.",
        "linkedCategory": COOKIE_CATEGORIES.PREFERENCES,
      },
    ],
  },
});
