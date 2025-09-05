"use client";

import {
  usePathname,
} from "next/navigation";
import {
  useEffect,
} from "react";

import {
  sleep,
} from "@/utils";

const ScrollToSection = () => {
  const pathName = usePathname();

  useEffect(() => {
    const scrollToSection = async () => {
      await sleep(1000);
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
