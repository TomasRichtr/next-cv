"use client";

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

  const isPasswordWithMeter = meterPassword && type === "password";
  const isPasswordInput = type === "password";

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
              type={type}
              name={name}
              id={id}
              defaultValue={defaultValue || ""}
              placeholder={label}
              className={error ? "is-invalid" : ""}
            />
            <label
              className="input-floating-label ms-0"
              htmlFor={id}
            >
              {label}
            </label>
          </div>
          <button
            type="button"
            data-toggle-password={`{ "target": "#${id}" }`}
            className="block cursor-pointer"
            aria-label="password toggle"
          >
            <span
              className="icon-[tabler--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"
            />
            <span
              className="icon-[tabler--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"
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
            className={`input outline-0! ${error ? "is-invalid" : ""}`.trim()}
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
