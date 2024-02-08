"use server";

import { prisma } from "@/lib/prisma";

export async function getHomes() {
  try {
    const homes = await prisma.home.findMany();
    return homes;
  } catch (e) {
    throw Error(`Error in get user data: ${e}`);
  }
}

export async function getHome(id: string) {
  try {
    const home = await prisma.home.findUnique({ where: { id: id } });
    return home;
  } catch (e) {
    throw Error(`Error in get user data: ${e}`);
  }
}
