import Typography from "@/components/shared/typography/Typography";
import OptionsCard from "./components/OptionsCard";
import { OptionsCardProps } from "./@types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-stretch justify-center gap-4">
        {optionsCardsInfos.map((o) => (
          <OptionsCard key={o.title} {...o} />
        ))}
      </div>
      <Typography variant="T_Medium_H2">Welcome to your dashboard</Typography>
      <Typography variant="T_Medium_H3">Register your home here</Typography>
      <Link href={"/dashboard/management"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
}
