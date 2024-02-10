import type { Metadata } from "next";

import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/styles/fontSans";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/shared/session-provider/SessionProvider";
import TopBar from "@/components/shared/top-bar/TopBar";
import { authOptions } from "@/utils/authOptions";
import { ThemeProvider } from "@/components/shared/theme-provider/ThemeProvider";
import Sidebar from "@/components/shared/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Key Change",
  description:
    "Unlock your next adventure with Key Change. Discover your dream home, connect with inspiring couples, and turn the key to a world of possibilities.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log("session:" + session);

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex justify-center w-full",
          fontSans.variable,
        )}
      >
        <SessionProvider session={session}>
          {session ? <Sidebar /> : <TopBar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
