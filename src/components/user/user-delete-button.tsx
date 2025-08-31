"use client";

import {
  useActionState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  removeUser,
} from "@/actions/user";
import FormButton from "@/components/forms/form-button";
import {
  Colors,
} from "@/types/theme";

interface UserDeleteButtonProps {
  userId: number,
  id: string,
}

const UserDeleteButton = ({
  userId, id,
}: UserDeleteButtonProps) => {
  const {
    t,
  } = useTranslation();

  const [_, formAction] = useActionState(removeUser.bind(null, userId), undefined);

  return (
    <form
      id="remove-user-form"
      action={formAction}
      className="inline-block"
      data-overlay={`#${id}`}
    >
      <FormButton
        label={t("login.actions.removeUser")}
        color={Colors.Error}
      />
    </form>
  );
};

export default UserDeleteButton;
