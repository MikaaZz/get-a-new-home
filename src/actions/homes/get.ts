"use server";

import { prisma } from "@/lib/prisma";

export async function getAllHomes() {
  try {
    const homes = await prisma.home.findMany({
      include: {
        category: true,
      },
    });
    return homes;
  } catch (e) {
    throw Error(`Error in getAllHomes: ${e}`);
  }
}

export async function getUserHomes(userId: string) {
  try {
    const homes = await prisma.home.findMany({
      where: { userId: userId },
      include: {
        category: true,
      },
    });
    return homes;
  } catch (e) {
    throw Error(`Error in getUserHomes: ${e}`);
  }
}

export async function getHome(id: string) {
  try {
    const home = await prisma.home.findUnique({ where: { id: id } });
    return home;
  } catch (e) {
    throw Error(`Error in getHome: ${e}`);
  }
}
