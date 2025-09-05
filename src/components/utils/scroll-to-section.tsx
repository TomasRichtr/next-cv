"use client";

import {
  compact, isEmpty, last, startsWith,
} from "lodash";
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

      let id;
      if (startsWith(pathName, "/skills/")) {
        id = "skills";
      } else {
        const pathParts = compact(pathName.split("/"));
        if (!isEmpty(pathParts)) {
          id = last(pathParts);
        }
      }

      if (id) {
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
