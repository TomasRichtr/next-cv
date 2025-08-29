import React from "react";

import {
  getUserById,
} from "@/backend/db/user";

interface UserDetailsProps {
    userId: string;
    t: (key: string) => string;
}

const UserDetails = async ({
  userId, t,
}: UserDetailsProps) => {
  const user = getUserById(userId)!;

  const userDetails = [{
    label:t("profile.labels.email"),
    value:user.email,
  }, {
    label:t("profile.labels.role"),
    value:user.role,
  }];

  return (
    <div
      className="grid grid-cols-5 h-fit"
    >
      {userDetails.map((detail) => {
        return (
          <React.Fragment
            key={detail.label}
          >
            <label
              className="font-semibold col-span-2 md:text-xl"
            >
              {detail.label}
              :
            </label>
            <span
              className="col-span-3 md:text-xl"
            >
              {detail.value}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default UserDetails;
