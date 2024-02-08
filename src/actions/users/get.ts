"use server";

import { prisma } from "@/lib/prisma";
import { getUserSession } from "../session/get";

export async function getLoggedUserData() {
  try {
    const session = await getUserSession();
    const user = await prisma.user.findUnique({
      where: { id: session?.userId },
    });
    return user;
  } catch (e) {
    throw Error(`Error in get user data: ${e}`);
  }
}
