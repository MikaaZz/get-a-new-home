import Link from "next/link";
import Typography from "../../typography/Typography";
import { SidebarItemsInfosProps } from "../sidebarInfos";

export default async function SidebarItem({
  title,
  icon: Icon,
  route,
}: SidebarItemsInfosProps) {
  return (
    <Link href={route}>
      <div className="flex gap-2 items-center hover:border-l-4 hover:border-red-700 transition-all group">
        <Icon className="text-gray-400 w-8 ml-4 group-hover:text-red-700 transition-all" />
        <Typography
          variant="T_Regular_H5"
          className="text-gray-400 mr-4 group-hover:text-red-700 transition-all"
        >
          {title}
        </Typography>
      </div>
    </Link>
  );
}
