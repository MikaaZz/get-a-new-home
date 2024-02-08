import { getHomes } from "@/actions/homes/get";
import Typography from "@/components/shared/typography/Typography";
import HomeCard from "./components/HomesCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { unstable_noStore } from "next/cache";

export default async function Page() {
  unstable_noStore();
  const homes = await getHomes();
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
