"use client";

import {
  usePathname,
} from "next/navigation";
import {
  useEffect,
} from "react";

const ScrollToSection = () => {
  const pathName = usePathname();

  useEffect(() => {
    const scrollToSection = () => {
      if (pathName === "/") {
        const section = document.querySelector("#home");

        section?.scrollIntoView();
        return;
      }

      const pathParts = pathName.split("/").filter(Boolean);
      if (!!pathParts.length) {
        const id = pathParts[pathParts.length - 1];
        const section = document.querySelector(`#${id}`);
        section?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    scrollToSection();
  }, [pathName]);

  return null;
};

export default ScrollToSection;
