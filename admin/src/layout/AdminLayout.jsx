import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
