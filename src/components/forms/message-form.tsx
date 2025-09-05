"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  useActionState,
  useEffect,
  useState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  submitMessage,
} from "@/actions/message";
import Form from "@/components/forms/form";
import FormButton from "@/components/forms/form-button";
import WithSkeleton from "@/components/layout/with-skeleton";
import Notification from "@/components/utils/notification";
import {
  ROUTE,
} from "@/constants/route";
import {
  Colors,
} from "@/types/theme";

import TextAreaInput from "./inputs/text-area-input";
import TextInput from "./inputs/text-input";

interface MessageFormProps {
  userEmail?: string;
  userId?: number;
}

const MessageForm = ({
  userEmail, userId,
}: MessageFormProps) => {
  const {
    i18n,
  } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [
    showSuccess, setShowSuccess,
  ] = useState(false);

  const [
    formState, formAction,
  ] = useActionState(submitMessage.bind(null, i18n.language, userId), undefined);

  const {
    t,
  } = useTranslation();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        router.replace(ROUTE.CONTACT);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [
    searchParams,
    router,
  ]);

  const handleNotificationClose = () => {
    setShowSuccess(false);
  };

  return (
    <>
      {showSuccess && (
        <Notification
          title={t("message.success.title")}
          message={t("message.success.description")}
          onClose={handleNotificationClose}
        />
      )}
      <Form
        id="message-form"
        formAction={formAction}
      >

        <WithSkeleton
          heightClass="h-12"
          widthClass="w-full"
        >
          <TextInput
            type="text"
            name="name"
            id="name"
            label={t("message.labels.name")}
            defaultValue={formState?.data?.name}
            error={formState?.field === "name" ? formState.message : undefined}
          />
        </WithSkeleton>

        <WithSkeleton
          heightClass="h-12"
          widthClass="w-full"
        >
          <TextInput
            type="email"
            name="email"
            id="email"
            label={t("message.labels.email")}
            defaultValue={formState?.data?.email || userEmail || ""}
            error={formState?.field === "email" ? formState.message : undefined}
          />
        </WithSkeleton>

        <WithSkeleton
          heightClass="h-12"
          widthClass="w-full"
        >
          <TextInput
            type="text"
            name="company_name"
            id="company_name"
            label={t("message.labels.companyName")}
            defaultValue={formState?.data?.company_name}
            error={formState?.field === "company_name" ? formState.message : undefined}
          />
        </WithSkeleton>

        <WithSkeleton
          heightClass="h-12"
          widthClass="w-full"
        >
          <TextInput
            type="text"
            name="phone"
            id="phone"
            label={t("message.labels.phone")}
            defaultValue={formState?.data?.phone}
            error={formState?.field === "phone" ? formState.message : undefined}
          />
        </WithSkeleton>

        <WithSkeleton
          heightClass="h-56"
          widthClass="w-full"
        >
          <TextAreaInput
            name="message"
            id="message"
            label={t("message.labels.message")}
            defaultValue={formState?.data?.message}
            error={formState?.field === "message" ? formState.message : undefined}
          />
        </WithSkeleton>

        {
          formState?.message && !formState?.field && formState.message !== "message.success" && (
          <p
            className="text-red-600"
          >
            {t(formState.message)}
          </p>
          )
        }

        <div
          className="flex justify-center"
        >
          <FormButton
            color={Colors.Primary}
            label={t("message.actions.submit")}
          />
        </div>
      </Form>
    </>
  );
};

export default MessageForm;
