"use server";

import { Prisma } from "@prisma/client";

export async function createHome(home: Prisma.HomeCreateInput) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/home", {
      method: "POST",
      body: JSON.stringify(home),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (e) {
    throw new Error(`Error in create home: ${e}`);
  }
}
