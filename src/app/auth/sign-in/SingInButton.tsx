"use client";

import Typography from "@/components/shared/typography/Typography";
import { Button } from "@/components/ui/button";

import { ClientSafeProvider, signIn } from "next-auth/react";

export default function SignInButton({
  provider,
}: {
  provider: ClientSafeProvider;
}) {
  return (
    <div className="p-2">
      <Button variant={"default"} onClick={() => signIn(provider.id)}>
        <Typography variant="T_Regular_P">
          Sign in with {provider.name}
        </Typography>
      </Button>
    </div>
  );
}
