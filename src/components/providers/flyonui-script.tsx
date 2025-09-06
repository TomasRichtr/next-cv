"use client";

import {
  isFunction,
} from "lodash";
import {
  usePathname,
} from "next/navigation";
import {
  useEffect,
} from "react";
import {
  Observer,
} from "tailwindcss-intersect";


const loadFlyonUI = async () => {
  return import("flyonui/flyonui");
};

const FlyonuiScript = () => {
  const path = usePathname();

  useEffect(() => {
    const initFlyonUI = async () => {
      try {
        await loadFlyonUI();
      } catch (error) {
        console.error("Failed to load FlyonUI:", error);
      }
    };

    initFlyonUI();
  }, []);

  useEffect(() => {
    const initComponents = async () => {
      if (document.readyState !== "loading") {
        initComponentsNow();
      } else {
        document.addEventListener("DOMContentLoaded", initComponentsNow);
      }

      Observer.start();
    };

    const initComponentsNow = () => {
      const attempts = [
        0,
        50,
        100,
        200,
        500,
      ];

      attempts.forEach((delay, index) => {
        setTimeout(() => {
          if (isFunction(window.HSStaticMethods?.autoInit)) {
            try {
              window.HSStaticMethods.autoInit();
            } catch (error) {
              console.error("FlyonUI autoInit failed:", error);
            }
          } else if (index === attempts.length - 1) {
            console.warn("FlyonUI HSStaticMethods not available after multiple attempts");
          }
        }, delay);
      });
    };

    initComponents();
  }, [path]);

  return null;
};

export default FlyonuiScript;
