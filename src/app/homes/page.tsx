import { getHomes } from "@/actions/homes/get";
import Typography from "@/components/shared/typography/Typography";
import HomeCard from "./components/HomesCard";

export default async function Page() {
  const homes = await getHomes();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Typography variant="T_Bold_H2">Lets see all homes:</Typography>
      <div>
        {homes.map((h) => (
          <HomeCard key={h.id} route={h.id} {...h} />
        ))}
      </div>
    </div>
  );
}
