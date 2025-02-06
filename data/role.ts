import { Role } from "@prisma/client";

import { db } from "@/lib/db";

export const getUserRole = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  return user?.role;
};

export const getAllAdmins = async () => {
  return await db.user.findMany({
    where: { role: Role.ADMIN },
  });
};
