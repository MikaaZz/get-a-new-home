import Link from "next/link";
import Image from "next/image";
// assets
import logoIconImage from "@/assets/logoIcon.png";

import LoginButton from "./components/LoginButton";

import { NavigationLinkProps } from "./@types";
import { NavigationLink } from "./components/NavigationLink";

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
  return (
    <nav className="flex items-center justify-between w-full fixed z-10 p-4 bg-slate-400 backdrop-filter backdrop-blur-md bg-opacity-10 mx-auto border-b border-gray-400">
      <div className="w-1/2 flex justify-start">
        <Link href={"/"}>
          <Image src={logoIconImage} alt="Logo Key change" height={40} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 w-full">
        {navigationLinksUnLogged.map((n) => (
          <NavigationLink key={n.pageName} {...n} />
        ))}
      </div>
      <div className="w-1/2 flex justify-end">
        <LoginButton />
      </div>
    </nav>
  );
}
