"use client";

import {
  useState,
} from "react";
import {
  useTranslation,
} from "react-i18next";


import PasswordMeter from "./password-meter";

interface TextInputProps {
  type: "email" | "password" | "text";
  name: string;
  id: string;
  label: string;
  defaultValue?: string;
  error?: string;
  meterPassword?: boolean;
}

const TextInput = ({
  type, name, id, label, defaultValue, error, meterPassword = false,
}: TextInputProps) => {
  const {
    t,
  } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const isPasswordWithMeter = meterPassword && type === "password";
  const isPasswordInput = type === "password";
  const inputType = isPasswordInput && showPassword ? "text" : type;

  return (
    <div
      className="relative"
    >
      {isPasswordInput ? (
        <div
          className="input"
        >
          <div
            className="input-floating grow"
          >
            <input
              type={inputType}
              name={name}
              id={id}
              defaultValue={defaultValue || ""}
              placeholder={label}
              className={`${error ? "is-invalid" : ""}`.trim()}
            />
            <label
              className="input-floating-label ms-0 rounded-t-xl"
              htmlFor={id}
            >
              {label}
            </label>
          </div>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="block cursor-pointer"
            aria-label="password toggle"
          >
            <span
              className={`icon-[tabler--eye] text-base-content/80 size-5 shrink-0 ${showPassword ? "block" : "hidden"}`}
            />
            <span
              className={`icon-[tabler--eye-off] text-base-content/80 size-5 shrink-0 ${showPassword ? "hidden" : "block"}`}
            />
          </button>
        </div>
      ) : (
        <div
          className="input-floating relative"
        >
          <input
            type={type}
            name={name}
            id={id}
            defaultValue={defaultValue || ""}
            placeholder={label}
            className={`input ${error ? "is-invalid" : ""}`.trim()}
          />
          <label
            className="input-floating-label rounded-t-xl"
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      )}
      {(error && !isPasswordWithMeter) && (
        <span
          className="helper-text ps-3 absolute -bottom-6 left-0"
        >
          {t(error)}
        </span>
      )}
      {isPasswordWithMeter && (
        <PasswordMeter
          inputId={id}
        />
      )}
    </div>
  );
};

export default TextInput;
