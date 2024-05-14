import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-2 pb-4">
        <Outlet />
      </div>
    </div>
  )
}