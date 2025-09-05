export const ROUTE = Object.freeze({
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  EXPERIENCE: "/experience",
  SKILLS: (filter?: number[]) => `/skills${filter ? `?degrees=${ filter.join(",")}` : ""}`,
  CONTACT: "/contact",
  REFERENCES: "/references",
  REFERENCE_DETAIL: (id: number | string) => `/references/${id}`,
  PROFILE: "/profile",
  ABOUT: "/about",
});
