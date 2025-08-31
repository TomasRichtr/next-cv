"use server";

import {
  revalidatePath,
} from "next/cache";

import {
  ROUTE,
} from "@/constants/route";
import {
  createOrUpdateReference,
  deleteReferenceByUserId,
} from "@/db/dao/reference";

export const processReference = async (
  userId: number,
  referenceId: number | undefined,
  prevState: void | undefined,
  formData: FormData,
) => {
  const reference = (formData.get("reference") as string).trim();

  if (reference === "") {
    deleteReferenceByUserId(userId);
  } else {
    createOrUpdateReference(reference, userId);
  }
  revalidatePath(ROUTE.REFERENCES);
};
