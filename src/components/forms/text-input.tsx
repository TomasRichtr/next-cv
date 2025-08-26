"use client";

import {
  useState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

interface TextInputProps {
  type: "email" | "password" | "text";
  name: string;
  id: string;
  label: string;
  defaultValue?: string;
  error?: string;
}

const TextInput = ({
  type, name, id, label, defaultValue, error,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!defaultValue);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
  };

  const {
    t,
  } = useTranslation();

  return (
    <div
      className="relative mb-6"
    >
      <input
        type={type}
        name={name}
        id={id}
        defaultValue={defaultValue || ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`
          peer w-full px-4 pt-6 pb-2 text-base bg-white border-2 rounded-lg
          transition-all duration-200 ease-in-out outline-none
          ${error 
          ? "border-error-500 hover:border-error-600" 
          : "border-secondary-300 hover:border-secondary-400"
          }
          disabled:bg-secondary-50 disabled:text-secondary-500
        `}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
          ${isFocused || hasValue
          ? "top-2 text-xs text-primary-600 font-medium"
          : "top-4 text-base text-secondary-500"
          }
        `}
      >
        {label}
      </label>
      {error && (
        <p
          className="mt-1 text-sm text-error-500"
        >
          {t(error)}
        </p>
      )}
    </div>
  );
};

export default TextInput;
