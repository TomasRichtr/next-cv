"use client";

import {
  useEffect, useRef, useState,
} from "react";
import {
  useFormStatus,
} from "react-dom";

import Loader from "@/components/utils/loader";
import {
  Sizes,
} from "@/types/theme";

const FormButton = ({
  label,
  variant = "primary",
  type = "submit",
}: {
  label: string;
  variant?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  type?: "submit" | "button";
}) => {
  const {
    pending,
  } = useFormStatus();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonSize, setButtonSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (buttonRef.current && !pending && !buttonSize) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonSize({
        width: rect.width,
        height: rect.height,
      });
    }
  }, [pending, buttonSize]);

  const getButtonStyles = () => {
    const baseStyles = "btn relative flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

    switch (variant) {
    case "primary":
      return `${baseStyles} btn-primary`;
    case "secondary":
      return `${baseStyles} btn-secondary`;
    case "accent":
      return `${baseStyles} btn-accent`;
    case "info":
      return `${baseStyles} btn-info`;
    case "success":
      return `${baseStyles} btn-success`;
    case "warning":
      return `${baseStyles} btn-warning`;
    case "error":
      return `${baseStyles} btn-error`;
    default:
      return baseStyles;
    }
  };

  const buttonType = type || (variant === "primary" ? "submit" : "button");

  const buttonStyle = buttonSize ? {
    width: `${buttonSize.width}px`,
    height: `${buttonSize.height}px`,
  } : {};

  return (
    <button
      ref={buttonRef}
      disabled={pending}
      className={getButtonStyles()}
      style={buttonStyle}
      type={buttonType}
    >
      {pending ? (
        <Loader
          size={Sizes.LG}
        />
      ) : label}
    </button>
  );
};

export default FormButton;
