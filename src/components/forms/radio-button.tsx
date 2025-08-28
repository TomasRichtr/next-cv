"use client";

import {
  ChangeEvent, ReactNode,
} from "react";

const RadioButton = ({
  selectedValue, value, label, radioChangeHandler, name, children,
}: {
  name: string,
  selectedValue: string,
  value: string,
  label?: string,
  radioChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  children?: ReactNode,
}) => {
  if (children === undefined) {
    return (
      <input
        key={value}
        className={`${selectedValue === value ? "bg-primary text-primary-content" : ""} join-item btn btn-soft w-14`}
        type="radio"
        name={name}
        value={value}
        aria-label={label}
        checked={selectedValue === value}
        onChange={radioChangeHandler}
      />
    );
  }

  const buildButtonClass = () => {
    let className = "join-item btn btn-soft w-14 flex items-center justify-center";
    className = `${className} ${selectedValue === value ? "bg-primary text-primary-content" : ""}`;
    return className;
  };

  return (
    <label
      className={buildButtonClass()}
    >
      {children}
      <input
        type="radio"
        name={name}
        value={value}
        aria-label={label}
        checked={selectedValue === value}
        onChange={radioChangeHandler}
        className="radio hidden"
      />
    </label>
  );
};

export default RadioButton;
