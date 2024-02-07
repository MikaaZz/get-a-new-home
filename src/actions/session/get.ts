"use server";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function getUserSession() {
  try {
    const cookieStore = cookies();
    const sessionToken = cookieStore.get("next-auth.session-token");
    const userSession = await prisma.session.findUnique({
      where: { sessionToken: sessionToken?.value },
    });

    return userSession;
  } catch (e) {
    throw Error(`Error in get user session: ${e}`);
  }
}
