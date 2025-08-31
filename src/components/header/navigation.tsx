import NavLink from "@/components/utils/nav-link";
import {
  ROUTE,
} from "@/constants/route";

interface NavigationProps {
  t: (key: string) => string
  userId?: string;
  dataOverlay?: string;
}

const NAVIGATION_ITEMS = [
  ROUTE.ABOUT,
  ROUTE.EXPERIENCE,
  ROUTE.SKILLS,
  ROUTE.CONTACT,
  ROUTE.REFERENCES,
];

const Navigation = async ({
  dataOverlay, t, userId,
}: NavigationProps) => {
  const getNavItems = () => {
    if (userId) {
      return [
        ...NAVIGATION_ITEMS,
        ROUTE.PROFILE,
      ];
    }
    return NAVIGATION_ITEMS;
  };

  return (
    <nav
      className="flex flex-col lg:flex-row flex-1 gap-4 lg:gap-4 items-start text-lg"
    >
      {getNavItems().map((route) => {
        return (
          <NavLink
            key={route}
            href={route}
            activeFor={[route]}
            dataOverlay={dataOverlay}
          >
            {t(`navigation.${route.replace("/", "")}`)}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
