import React, {
  ReactNode,
} from "react";

import {
  Sizes,
} from "@/types/theme";

interface ModalProps {
  id: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: Sizes.SM | Sizes.MD | Sizes.LG | Sizes.XL;
  t: (key: string) => string;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  title,
  children,
  footer,
  size = Sizes.MD,
  t,
}) => {
  const sizeClasses = {
    [Sizes.SM]: "max-w-sm",
    [Sizes.MD]: "max-w-md",
    [Sizes.LG]: "max-w-lg",
    [Sizes.XL]: "max-w-xl",
  };

  return (
    <div
      id={id}
      className="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden"
      role="dialog"
      tabIndex={-1}
    >
      <div
        className={`modal-dialog overlay-open:mt-12 overlay-open:duration-300 transition-all ease-out ${sizeClasses[size]}`}
      >
        <div
          className="modal-content"
        >
          <div
            className="modal-header"
          >
            <h3
              className="modal-title"
            >
              {title}
            </h3>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
              aria-label={t ? t("modal.close") : "Close"}
              data-overlay={`#${id}`}
            >
              <span
                className="icon-[tabler--x] size-4"
              />
            </button>
          </div>
          <div
            className="modal-body"
          >
            {children}
          </div>
          <div
            className="modal-footer"
          >
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
