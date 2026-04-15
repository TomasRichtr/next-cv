"use client";
import {
  debounce,
} from "lodash";
import {
  useActionState,
  useEffect,
  useRef,
  startTransition,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  processReference,
} from "@/actions/reference";
import Form from "@/components/forms/form";
import TextAreaInput from "@/components/forms/inputs/text-area-input";
import WithSkeleton from "@/components/layout/with-skeleton";
import {
  useBeforeUnload,
} from "@/hooks/useBeforeUnload";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import {
  setCurrentContent, setSavedContent,
} from "@/store/slices/referenceSlice";
import {
  FormFields, ReferenceWithUser,
} from "@/types/reference";

interface ReferenceFormProps {
  className?: string;
  reference: ReferenceWithUser | null;
  userId: number;
}

const ReferenceForm = ({
  className, reference, userId,
}: ReferenceFormProps) => {
  const [
    _, formAction,
  ] = useActionState(processReference.bind(null, userId, reference?.id), undefined);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const hasUnsavedChanges = useAppSelector(state => state.reference.hasUnsavedChanges);

  const {
    t,
  } = useTranslation();

  useBeforeUnload(
    hasUnsavedChanges,
    t("references.unsavedChangesWarning"),
  );

  useEffect(() => {
    const initialContent = reference?.reference || "";
    dispatch(setSavedContent(initialContent));
  }, [
    reference?.reference,
    dispatch,
  ]);

  type DebouncedFn = (formElement: HTMLFormElement, content: string) => void;
  const debouncedSubmitRef = useRef<DebouncedFn | null>(null);

  useEffect(() => {
    const fn = debounce((formElement: HTMLFormElement, content: string) => {
      const formData = new FormData(formElement);
      startTransition(() => {
        formAction(formData);
        dispatch(setSavedContent(content));
      });
    }, 2000);
    debouncedSubmitRef.current = fn;
    return () => fn.cancel();
  }, [
    formAction,
    dispatch,
  ]);

  const handleTextAreaChange = (value: string) => {
    dispatch(setCurrentContent(value));
    if (formRef.current && debouncedSubmitRef.current) {
      debouncedSubmitRef.current(formRef.current, value);
    }
  };

  return (
    <Form
      id="reference-form"
      ref={formRef}
      className={className}
      formAction={formAction}
    >
      <WithSkeleton
        heightClass="h-44"
      >
        <TextAreaInput
          name="reference"
          id={FormFields.Reference}
          label={t("references.label")}
          defaultValue={reference?.reference}
          onChange={handleTextAreaChange}
          showUnsavedIndicator={hasUnsavedChanges}
        />
      </WithSkeleton>
    </Form>
  );
};

export default ReferenceForm;
