import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getHomeCategory(homeId: Prisma.HomeListRelationFilter) {
  try {
  } catch (e) {
    throw Error(`Error in getHome: ${e}`);
  }
}
