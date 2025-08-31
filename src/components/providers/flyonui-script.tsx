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

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

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
      // Wait for DOM to be ready
      if (document.readyState !== "loading") {
        initComponentsNow();
      } else {
        document.addEventListener("DOMContentLoaded", initComponentsNow);
      }
    };

    const initComponentsNow = () => {
      // Try multiple times with increasing delays to ensure components are initialized
      const attempts = [0, 50, 100, 200, 500];

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
