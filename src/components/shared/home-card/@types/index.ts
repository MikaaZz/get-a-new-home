import { Home, Prisma } from "@prisma/client";

export interface HomesCardProps extends Home {
  category: Prisma.CategoryCreateInput | null;
  route: string;
}
