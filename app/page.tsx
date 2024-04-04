import SideBar from "@/components/Shared/Sidebar";
import AllCourses from "@/components/Shared/AllCourses";
export default async function Home() {
  return (
    <div className="flex gap-5">
      <SideBar />
      <AllCourses />
    </div>
  );
}
