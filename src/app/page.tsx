import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { SquareArrowDown } from "lucide-react";

export default async function Home() {

  const user = await currentUser();

  const userObj = {
    img: user?.imageUrl,
    fullName: user?.fullName,
    name: user?.firstName,
    last: user?.lastName
  }

  return (
    <div className="pt-24">
      <div className="md:max-w-6xl lg:max-w-7xl mx-auto flex justify-between gap-3">
        {
          userObj.fullName ? <Sidebar user={userObj} key={'1'} /> : <div className="w-[20%] h-fit flex gap-3 bg-white flex-col items-center text-sm p-5 rounded-lg"> <SignedOut>
            <p className="font-semibold text-center">Join the Community. Sign In Here. </p>
            <Button
              className="rounded-full duration-700 ease-in-out hover:shadow-lg "
              variant={"default"}
            >
              {" "}
              <SignInButton />
            </Button>
          </SignedOut></div>
        }

        <Feed />
        <News />
      </div>
    </div>
  );
}
