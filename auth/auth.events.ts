// auth/config/auth.events.ts
import { db } from "@/lib/db";
const authEvents = {
  async linkAccount({ user }) {
    await db.user.update({
      where: { id: user.id },
      data: { emailVerified: new Date() },
    });
  },
};

export default authEvents;
