"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validator = RegisterSchema.safeParse(values);
  if (!validator.success) {
    return { error: "Invalid Credentials" };
  }

  const { name, email, password } = validator.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  // create user
  const user = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    sucess: "Account Created Successful",
  };
};
