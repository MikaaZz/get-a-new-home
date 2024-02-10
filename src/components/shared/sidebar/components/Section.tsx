import Typography from "../../typography/Typography";
import { SidebarSectionInfosProps } from "../sidebarInfos";
import SidebarItem from "./Item";

export default async function SidebarSection({
  sectionTitle,
  sectionItems,
}: SidebarSectionInfosProps) {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="T_Medium_P" className="text-gray-400 ml-4">
        {sectionTitle}
      </Typography>
      {sectionItems.map((e) => (
        <SidebarItem key={e.title} {...e} />
      ))}
    </div>
  );
}
