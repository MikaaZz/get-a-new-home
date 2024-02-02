import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";

import { authOptions } from "@/utils/authOptions";

import SignInButton from "./SingInButton";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  const providers = await getProviders();

  if (providers)
    return (
      <div className="min-h-screen flex items-center justify-center">
        {Object.values(providers).map((provider) => (
          <SignInButton key={provider.name} provider={provider} />
        ))}
      </div>
    );
}
