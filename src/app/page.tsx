import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const user = await currentUser();
  console.log(user?.imageUrl);

  const userObj = {
    img: user?.imageUrl,
    name: user?.fullName
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
