import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const user = await currentUser();
  console.log(user);

  const userObj = {
    img: user?.imageUrl,
    fullName: user?.fullName,
    name: user?.firstName,
    last: user?.lastName
  }
  
  return (
    <div className="pt-24">
      <div className="max-w-6xl mx-auto flex justify-between gap-3">
        <Sidebar user={userObj} key={'1'} />
        <Feed />
        <News />
      </div>
    </div>
  );
}
