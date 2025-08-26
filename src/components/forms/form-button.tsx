"use client";

import {
  useRef, useEffect, useState,
} from "react";
import {
  useFormStatus,
} from "react-dom";

import Loader from "@/components/utils/loader";

const FormButton = ({
  label,
  variant = "primary",
  type = "submit",
}: {
  label: string;
  variant?: "primary" | "secondary";
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
    const baseStyles = "relative flex justify-center items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

    switch (variant) {
    case "primary":
      return `${baseStyles} bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`;
    case "secondary":
    default:
      return `${baseStyles} bg-transparent hover:bg-secondary-50 text-secondary-700 border-2 border-secondary-300 hover:border-secondary-400`;
    }
  };

  // Determine button type based on variant if not explicitly provided
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
          size={24}
        />
      ) : label}
    </button>
  );
};

export default FormButton;
