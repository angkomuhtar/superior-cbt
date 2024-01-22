"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const register = async ({ email, name, password }) => {
  let hashedPass = await bcrypt.hash(password, 10);
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPass,
    },
  });

  return {
    success: true,
    message: "success",
  };
};
