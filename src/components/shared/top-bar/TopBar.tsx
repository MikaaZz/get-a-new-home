import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

import LoginButton from "./LoginButton";
import Logged from "./Logged";
import Typography from "../typography/Typography";

export default async function TopBar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex items-center justify-around w-90 fixed top-2 z-10 py-4 bg-slate-400 backdrop-filter backdrop-blur-md bg-opacity-10 mx-auto border border-slate-300 rounded-md">
      <div>Logo</div>

      <ul className="flex gap-2 items-center justify-center">
        <li>
          <Typography variant="T_Medium_P">New homes</Typography>
        </li>
        <li>
          <Typography variant="T_Medium_P">Publish your home</Typography>
        </li>
        <li>
          <Typography variant="T_Medium_P">Search in map</Typography>
        </li>
      </ul>

      <div>{session ? <Logged /> : <LoginButton />}</div>
    </nav>
  );
}
