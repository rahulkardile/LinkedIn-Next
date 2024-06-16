import { NavItemType } from "@/types/NavItemsType";
import {
  Bell,
  BriefcaseBusiness,
  Home,
  MessageCircleMore,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const NavItems: NavItemType[] = [
  {
    src: "/",
    icon: <Home />,
    text: "Home",
  },
  {
    src: "/network",
    icon: <User />,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <BriefcaseBusiness />,
    text: "Jobs",
  },
  {
    src: "/message",
    icon: <MessageCircleMore />,
    text: "Message",
  },
  {
    src: "/notification",
    icon: <Bell />,
    text: "Notification",
  },
];

const NavItem = () => {
  return (
    <div className="flex gap-8 select-none">
      {NavItems.map((item, index) => (
        <Link
          key={index}
          href={item.src}
          className="flex flex-col items-center cursor-pointer text-gray-500 hover:text-black"
        >
          <span className="text-xs">{item.icon}</span>
          <span className="text-xs">{item.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavItem;
