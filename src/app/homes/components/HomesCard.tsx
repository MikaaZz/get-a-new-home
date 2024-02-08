import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/shared/typography/Typography";

import { HomesCardProps } from "../@types";

import { getLoggedUserData } from "@/actions/users/get";

export default async function HomeCard({
  title,
  description,
  location,
  value,
  route,
  userId,
}: HomesCardProps) {
  const user = await getLoggedUserData();
  console.log(`userId: ${userId}`);
  console.log(`user?.id: ${user?.id}`);
  return (
    <Card className="min-w-72 max-w-72 justify-between flex flex-col items-start">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description ?? "No description defined"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start justify-start gap-4">
          <Typography variant="T_Regular_H4">U$: {value}</Typography>
          <Typography variant="T_Regular_P">Location : {location}</Typography>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/homes/view/${route}`}>
          <Button className="w-full">Access</Button>
        </Link>
        {user?.id == userId && (
          <Link href={`/my-homes/management/${route}`}>
            <Button className="w-full">Edit</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
