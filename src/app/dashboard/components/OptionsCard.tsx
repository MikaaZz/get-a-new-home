import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { OptionsCardProps } from "../@types";

export default function OptionsCard({
  title,
  description,
  route,
}: OptionsCardProps) {
  return (
    <Card className="min-w-72 max-w-72 justify-between flex flex-col items-start">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={route}>
          <Button className="w-full">Access</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
