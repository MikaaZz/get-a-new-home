import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href={"/auth/sign-in"}>
      <Button variant={"link"}>Fazer login</Button>
    </Link>
  );
}
