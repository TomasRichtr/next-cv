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

  return (
    <div>
      <div
        className="input-floating relative"
      >
        <input
          type={type}
          name={name}
          id={id}
          defaultValue={defaultValue || ""}
          placeholder={label}
          className={`input input-lg ${error ? "is-invalid" : ""}`.trim()}
        />
        <label
          className="input-floating-label"
          htmlFor={id}
        >
          {label}
        </label>
        {(error && !isPasswordWithMeter) && (
          <span
            className="helper-text ps-3 absolute -bottom-6 left-0"
          >
            {t(error)}
          </span>
        )}
      </div>
      {isPasswordWithMeter && (
        <PasswordMeter
          inputId={id}
        />
      )}
    </div>
  );
};

export default TextInput;
