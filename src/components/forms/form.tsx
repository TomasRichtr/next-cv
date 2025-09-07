"use client";
import {
  ReactNode, RefObject,
} from "react";

interface FormProps {
  id: string;
  className?: string;
  children: ReactNode;
  formAction: (payload: FormData) => void
  ref?: RefObject<HTMLFormElement | null>;
}

const Form = ({
  id, className, children, formAction, ref,
}: FormProps) => {
  return (
    <form
      id={id}
      ref={ref}
      className={`flex flex-col gap-8 w-full max-w-xl ${className}`}
      action={formAction}
    >
      {children}
    </form>
  );
};

export default Form;
