"use client";

import {
  ReactNode, useEffect, useRef, useState,
} from "react";
import {
  useFormStatus,
} from "react-dom";

import Loader from "@/components/utils/loader";
import {
  Colors,
  Sizes, Styles,
} from "@/types/theme";
import {
  getBtnColor, getBtnStyle,
} from "@/utils/styles";

const FormButton = ({
  label,
  children,
  style,
  color,
  type = "submit",
}: {
  label?: string;
  children?: ReactNode;
  style?: Styles;
  color?: Colors;
  type?: "submit" | "button";
}) => {
  const {
    pending,
  } = useFormStatus();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonSize, setButtonSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (buttonRef.current && !pending) {
      const rect = buttonRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && !buttonSize) {
        setButtonSize({
          width: rect.width,
          height: rect.height,
        });
      }
    }
  }, [pending, buttonSize, label, children]);

  const getButtonStyles = () => {
    let baseStyles = "rounded-lg tooltip-toggle btn relative flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";
    if (color) {
      baseStyles = `${baseStyles} ${getBtnColor(color)}`;
    }
    if (style) {
      baseStyles = `${baseStyles} ${getBtnStyle(style)}`;
    }
    return baseStyles;
  };

  const buttonStyle = buttonSize && pending ? {
    width: `${buttonSize.width}px`,
    height: `${buttonSize.height}px`,
  } : {};

  return (
    <button
      ref={buttonRef}
      disabled={pending}
      className={getButtonStyles()}
      style={buttonStyle}
      type={type}
    >
      {pending ? (
        <Loader
          size={Sizes.LG}
        />
      ) : (children || label)}
    </button>
  );
};

export default FormButton;
