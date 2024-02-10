import { getUserHomes } from "@/actions/homes/get";
import { getLoggedUserData } from "@/actions/users/get";
import HomeCard from "@/components/shared/home-card/HomeCard";
import Typography from "@/components/shared/typography/Typography";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const user = await getLoggedUserData();
  const userHomes = await getUserHomes(user!.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Typography variant="T_Bold_H2">This is your homes:</Typography>
      <div className="flex items-stretch justify-center gap-8 flex-wrap w-90">
        {userHomes.map((e) => (
          <HomeCard key={e.title} route="" {...e} />
        ))}
      </div>
    </div>
  );
}
