import Link from "next/link";
import { getServerSession } from "next-auth";
import Image from "next/image";

import { authOptions } from "@/utils/authOptions";
// assets
import logoImage from "@/assets/logo.jpeg";

import LoginButton from "./components/LoginButton";
import Logged from "./components/Logged";

import { NavigationLinkProps } from "./@types";
import { NavigationLink } from "./components/NavigationLink";

const navigationLinksLogged: NavigationLinkProps[] = [
  {
    pageName: "Bookings",
    route: "/bookings",
  },
  {
    pageName: "My Homes",
    route: "/my-homes",
  },
  {
    pageName: "Dashboard",
    route: "/dashboard",
  },
  {
    pageName: "Notifications",
    route: "/notifications",
  },
  {
    pageName: "Favorites",
    route: "/favorites",
  },
];
const navigationLinksUnLogged: NavigationLinkProps[] = [
  {
    pageName: "About us",
    route: "/about",
  },
  {
    pageName: "Home",
    route: "/",
  },
  {
    pageName: "How it Works",
    route: "/hot-it-works",
  },
];

export default async function TopBar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex items-center justify-between w-full fixed z-10 p-4 bg-slate-400 backdrop-filter backdrop-blur-md bg-opacity-10 mx-auto border-b border-gray-400">
      <div className="w-1/2 flex justify-start">
        <Link href={"/"}>
          <Image src={logoImage} alt="Logo Key change" height={40} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 w-full">
        {session
          ? navigationLinksLogged.map((n) => (
              <NavigationLink key={n.pageName} {...n} />
            ))
          : navigationLinksUnLogged.map((n) => (
              <NavigationLink key={n.pageName} {...n} />
            ))}
      </div>
      <div className="w-1/2 flex justify-end">
        {session ? <Logged /> : <LoginButton />}
      </div>
    </nav>
  );
}
