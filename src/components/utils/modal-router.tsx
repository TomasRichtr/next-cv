"use client";

import {
  useRouter,
} from "next/navigation";
import {
  useEffect,
} from "react";

import {
  sleep,
} from "@/utils";

interface ModalOpenerProps {
  modalId: string;
  rootRoute?: string
}

const ModalRouter = ({
  modalId, rootRoute,
}: ModalOpenerProps) => {
  if (!modalId) {
    return null;
  }

  const router = useRouter();

  useEffect(() => {
    const setModalRouting = async () => {
      await sleep(100);
      const button = document.querySelector<HTMLButtonElement>(`button[data-overlay="#${modalId}"]`);
      if (button) {
        button.click();
      }

      if (!rootRoute) return;
      const overlay = document.querySelector<HTMLElement>(`#${modalId}-backdrop`);
      const closeButtons = document.querySelectorAll<HTMLButtonElement>(".close-overlay");
      closeButtons.forEach((button) => {
        button.onclick = () => {
          router.push(rootRoute);
          overlay?.remove();
        };
      });
    };

    setModalRouting();
  }, [
    modalId,
    rootRoute,
    router,
  ]);

  return (
    <button
      type="button"
      className="hidden"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls={modalId}
      data-overlay={`#${modalId}`}
    />
  );
};

export default ModalRouter;
