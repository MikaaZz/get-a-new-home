import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function Logged() {
  const session = await getServerSession(authOptions);
  return (
    <Avatar>
      <AvatarImage src={session?.user?.image ?? ""} />
      <AvatarFallback>KG</AvatarFallback>
    </Avatar>
  );
}
