export const ROUTE = Object.freeze({
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  EXPERIENCE: "/experience",
  SKILLS: "/skills",
  CONTACT: "/contact",
  REFERENCES: "/references",
  REFERENCE_DETAIL: (id: number) => `/references/${id}`,
  PROFILE: "/profile",
  ABOUT: "/about",
});
