import { getAllHomes } from "@/actions/homes/get";
import Typography from "@/components/shared/typography/Typography";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { unstable_noStore } from "next/cache";
import HomeCard from "@/components/shared/home-card/HomeCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Page() {
  unstable_noStore();
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const homes = await getAllHomes();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center gap-2">
        <Typography variant="T_Bold_H4">Register your home:</Typography>
        <Link href={"/my-homes/management/new-home"}>
          <Button>Register</Button>
        </Link>
      </div>
      <Typography variant="T_Bold_H2">Lets see all homes:</Typography>
      <div className="flex flex-wrap items-stretch justify-center gap-4">
        {homes.map((h) => (
          <HomeCard key={h.id} route={`${h.id}`} {...h} />
        ))}
      </div>
    </div>
  );
}
