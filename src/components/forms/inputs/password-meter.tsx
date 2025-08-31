"use client";

import {
  useTranslation,
} from "react-i18next";

interface PasswordMeterProps {
  inputId: string;
}

const PasswordMeter = ({
  inputId,
}: PasswordMeterProps) => {
  const {
    t,
  } = useTranslation();

  return (
    <>
      <div
        data-strong-password={`{
         "target": "#${inputId}",
        "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20",
        "minLength": "8",
        "specialCharactersSet": "&!@_"
      }`}
        className="rounded-full overflow-hidden mt-2 flex gap-0.5"
      />
      <span
        className="helper-text"
      >
        {t("password.strength.description")}
      </span>
    </>

  );
};

export default PasswordMeter;

