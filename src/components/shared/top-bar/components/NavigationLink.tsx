import Link from "next/link";
import Typography from "../../typography/Typography";
import { Button } from "@/components/ui/button";
import { NavigationLinkProps } from "../@types";

export const NavigationLink = ({ pageName, route }: NavigationLinkProps) => {
  return (
    <Link href={route} className="w-full">
      <Button variant={"link"}>
        <Typography variant="T_Regular_P">{pageName}</Typography>
      </Button>
    </Link>
  );
};
