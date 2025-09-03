"use client";

import {
  useRouter,
} from "next/navigation";
import {
  useEffect,
} from "react";

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
    const timer = setTimeout(() => {
      const button = document.querySelector<HTMLButtonElement>(`button[data-overlay="#${modalId}"]`);
      if (button) {
        button.click();
      }

      const overlay = document.querySelector<HTMLElement>(`#${modalId}-backdrop`);
      if (overlay && rootRoute) {
        overlay.onclick = () => {
          router.push(rootRoute);
        };
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [modalId, rootRoute, router]);

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
