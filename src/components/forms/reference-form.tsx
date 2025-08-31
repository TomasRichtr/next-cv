"use client";
import {
  debounce,
} from "lodash";
import {
  useActionState,
  useCallback,
  useRef,
  startTransition,
  useEffect,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  processReference,
} from "@/actions/reference";
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
  const [_, formAction] = useActionState(processReference.bind(null, userId, reference?.id), undefined);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const hasUnsavedChanges = useAppSelector(state => state.reference.hasUnsavedChanges);

  const {
    t,
  } = useTranslation();

  // Warn user before leaving page with unsaved changes
  useBeforeUnload(
    hasUnsavedChanges,
    t("references.unsavedChangesWarning"),
  );

  // Initialize Redux state with current reference content
  useEffect(() => {
    const initialContent = reference?.reference || "";
    dispatch(setSavedContent(initialContent));
  }, [reference?.reference, dispatch]);

  const debouncedSubmit = useCallback(
    debounce((content: string) => {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        startTransition(() => {
          formAction(formData);
          // Mark content as saved after successful submission
          dispatch(setSavedContent(content));
        });
      }
    }, 2000),
    [formAction, dispatch],
  );

  const handleTextAreaChange = (value: string) => {
    dispatch(setCurrentContent(value));
    debouncedSubmit(value);
  };

  return (
    <form
      ref={formRef}
      id="reference-form"
      className={className}
      action={formAction}
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
    </form>
  );
};

export default ReferenceForm;
