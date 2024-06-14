import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="pt-24">

      <div className="max-w-6xl mx-auto flex justify-between gap-3">
        <Sidebar />
        <Feed />
        <News />
      </div>
    </div>
  );
}
