import {
  BellIcon,
  BookCheckIcon,
  BookIcon,
  HeartIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  LucideIcon,
  UserRoundCogIcon,
  UserRoundIcon,
} from "lucide-react";

export type SidebarItemsInfosProps = {
  title: string;
  icon: LucideIcon;
  route: string;
};

export type SidebarSectionInfosProps = {
  sectionTitle: string;
  sectionItems: SidebarItemsInfosProps[];
};

export const sidebarInfos: SidebarSectionInfosProps[] = [
  {
    sectionTitle: "Homes",
    sectionItems: [
      {
        title: "All Homes",
        icon: HomeIcon,
        route: "",
      },
      {
        title: "Bookings",
        icon: BookCheckIcon,
        route: "",
      },
      {
        title: "Your homes",
        icon: UserRoundIcon,
        route: "",
      },
    ],
  },
  {
    sectionTitle: "Dashboard",
    sectionItems: [
      {
        title: "Access",
        icon: LayoutDashboardIcon,
        route: "",
      },
      {
        title: "Favorites",
        icon: HeartIcon,
        route: "",
      },
      {
        title: "Notifications",
        icon: BellIcon,
        route: "",
      },
    ],
  },
  {
    sectionTitle: "Profile",
    sectionItems: [
      {
        title: "Manage",
        icon: UserRoundCogIcon,
        route: "",
      },
      {
        title: "Logout",
        icon: LogOutIcon,
        route: "",
      },
    ],
  },
];
