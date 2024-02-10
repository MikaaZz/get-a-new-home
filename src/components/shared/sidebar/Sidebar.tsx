import logoMarcaImage from "@/assets/logoMarca.png";

import SidebarSection from "./components/Section";
import { sidebarInfos } from "./sidebarInfos";
import Image from "next/image";

export default async function Sidebar() {
  return (
    <div className="flex flex-col w-1/5 border-r-2 border-gray-200 gap-4">
      <Image
        alt="Logo Key change"
        className="mx-auto"
        height={120}
        src={logoMarcaImage}
      />
      {sidebarInfos.map((e) => (
        <SidebarSection key={e.sectionTitle} {...e} />
      ))}
    </div>
  );
}
