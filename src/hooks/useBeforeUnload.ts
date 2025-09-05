import {
  useEffect,
} from "react";

export const useBeforeUnload = (shouldWarn: boolean, message?: string) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (shouldWarn) {
        event.preventDefault();
      }
    };

    if (shouldWarn) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [
    shouldWarn,
    message,
  ]);
};
