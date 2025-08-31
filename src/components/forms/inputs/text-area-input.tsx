"use client";

import {
  useTranslation,
} from "react-i18next";

import {
  Sizes,
} from "@/types/theme";

interface TextAreaInputProps {
  name: string;
  id: string;
  label: string;
  defaultValue?: string;
  error?: string;
  size?: Sizes;
  className?: string;
  onChange?: (value: string) => void;
  showUnsavedIndicator?: boolean;
}

const TextAreaInput = ({
  name, id, label, defaultValue, error, size = Sizes.MD, className, onChange, showUnsavedIndicator = false,
}: TextAreaInputProps) => {
  const {
    t,
  } = useTranslation();

  const getSizeClass = () => {
    switch (size) {
    case Sizes.XS:
      return "textarea-xs";
    case Sizes.SM:
      return "textarea-sm";
    case Sizes.MD:
      return "";
    case Sizes.LG:
      return "textarea-lg";
    case Sizes.XL:
      return "textarea-xl";
    default:
      return "";
    }
  };

  return (
    <div
      className={`${className} relative`}
    >
      <div
        className="textarea-floating h-full"
      >
        <textarea
          name={name}
          id={id}
          defaultValue={defaultValue || ""}
          placeholder={label}
          className={`textarea min-h-56 ${getSizeClass()} ${error ? "is-invalid" : ""}`.trim()}
          onChange={(e) => onChange?.(e.target.value)}
        />
        <label
          className="textarea-floating-label rounded-t-xl"
          htmlFor={id}
        >
          {label}
        </label>
        {showUnsavedIndicator && (
          <div
            className="absolute bottom-3 right-3 text-warning animate-pulse"
            title={t("references.unsavedChanges")}
          >
            <span
              className="icon-[tabler--device-floppy] size-5"
            />
          </div>
        )}
      </div>
      {error && (
        <span
          className="helper-text ps-3 absolute -bottom-6 left-0 text-red-600"
        >
          {t(error)}
        </span>
      )}
    </div>
  );
};

export default TextAreaInput;
