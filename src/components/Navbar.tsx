import Image from "next/image";
import React from "react";
import Search from "./Search";
import NavItem from "./NavItem";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50 p-2">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={35}
            height={35}
            className="bg-white"
          />
          <Search />
        </div>
        <div className="flex items-center gap-5">
          <div className="">
            <NavItem />
          </div>
          <div className="">
            <SignedIn>
              <UserButton />
            </SignedIn>

          <SignedOut>
            <Button className="">
              <SignInButton />
            </Button>
          </SignedOut>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
