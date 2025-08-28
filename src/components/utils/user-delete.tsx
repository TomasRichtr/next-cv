"use client";

import {
  useActionState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  removeUser,
} from "@/backend/actions/user";
import FormButton from "@/components/forms/form-button";
import {
  Colors,
} from "@/types/theme";

const UserDelete = ({
  userId,
}: {userId: string}) => {
  const [_, formAction] = useActionState(removeUser.bind(null, userId), undefined);

  const {
    t,
  } = useTranslation();

  return (
    <form
      id="remove-user-form"
      action={formAction}
    >
      <FormButton
        label={t("login.actions.removeUser")}
        color={Colors.Error}
      />
    </form>
  );
};

export default UserDelete;
