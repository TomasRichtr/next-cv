"use client";

import React from "react";
import {
  useTranslation,
} from "react-i18next";

import ErrorCard from "@/components/utils/error-card";

const Error = ({
  error,
}: {error: Error}) => {
  const {
    t,
  } = useTranslation();

  return (
    <main
      className="error"
    >
      <h1>
        {t("common:error.title")}
      </h1>
      <p>
        {t("common:error.description")}
      </p>
      {error.message && (
      <p
        className="text-red-600"
      >
        {error.message}
      </p>
      )}

      <ErrorCard />
    </main>
  );
};

export default Error;
