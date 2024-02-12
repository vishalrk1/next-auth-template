"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validator = LoginSchema.safeParse(values);
  if (!validator.success) {
    return { error: "Invalid Credentials" };
  }
  return {
    sucess: "Login Successful",
  };
};
