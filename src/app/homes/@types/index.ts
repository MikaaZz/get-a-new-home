import { Home } from "@prisma/client";

export interface HomesCardProps extends Home {
  route: string;
}
