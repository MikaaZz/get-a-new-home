import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { OptionsCardProps } from "./@types";
import { authOptions } from "@/utils/authOptions";

import Typography from "@/components/shared/typography/Typography";
import OptionsCard from "./components/OptionsCard";

const optionsCardsInfos: OptionsCardProps[] = [
  {
    title: "Listings",
    description: "View and manage your listings",
    route: "/listings",
  },
  {
    title: "Homes",
    description: "Search and explore new homes",
    route: "/homes",
  },
  {
    title: "Notifications",
    description: "Access your notifications and see your messages too",
    route: "/notifications",
  },
  {
    title: "Bookings",
    description: "View and manage your bookings",
    route: "/bookings",
  },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="flex flex-col items-center">
        <Typography variant="T_Medium_H2">Welcome to your dashboard</Typography>
        <Typography variant="T_Medium_H3">Register your home here</Typography>
      </div>
      <div className="flex items-stretch justify-center gap-4">
        {optionsCardsInfos.map((o) => (
          <OptionsCard key={o.title} {...o} />
        ))}
      </div>
    </div>
  );
}
