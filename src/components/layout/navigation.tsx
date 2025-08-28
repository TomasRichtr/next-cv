import NavLink from "@/components/utils/nav-link";
import {
  ROUTE,
} from "@/constants/route";

interface NavigationProps {
  t: (key: string) => string;
  user: { id: string } | null;
  dataOverlay?: string;
}

const NAVIGATION_ITEMS = [
  ROUTE.EXPERIENCE,
  ROUTE.SKILLS,
  ROUTE.CONTACT,
  ROUTE.REFERENCES,
];

const Navigation = ({
  t, dataOverlay, user,
}: NavigationProps) => {

  const getNavItems = () => {
    if (user) {
      return [
        ...NAVIGATION_ITEMS,
        ROUTE.PROFILE,
      ];
    }
    return NAVIGATION_ITEMS;
  };

  return (
    <nav
      className="flex flex-col md:flex-row flex-1 gap-4 md:gap-2 items-start text-lg"
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
