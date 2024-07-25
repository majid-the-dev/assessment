import Link from "next/link";
import {
  User,
  Lock,
  Cloud,
  Tag,
  Money,
  BellSimple,
  SignOut
} from "@phosphor-icons/react/dist/ssr";

const Sidebar = () => {
  return (
    <aside className="hidden bg-white border border-[#E4E7EC] rounded-[6px] absolute left-0 z-20 lg:flex w-60 flex-col overflow-y-hidden bg-primary-blue text-secondary-gray duration-300 ease-linear lg:static lg:translate-x-0 pt-4">
      {/* Sidebar Header */}
      <p className="text-xs font-bold text-[#334155] px-4">Settings</p>

      {/* Sidebar Body */}
      <div className="flex flex-col gap-3 px-2 mt-2 flex-1">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-[#94A3B8] text-sm font-light hover:bg-[#F0F6FE] hover:text-[#0D6EFD] rounded-[6px] px-4 py-3"
        >
          <User size={20} />
          Account
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-[#94A3B8] text-sm font-light hover:bg-[#F0F6FE] hover:text-[#0D6EFD] rounded-[6px] px-4 py-3"
        >
          <Lock size={20} />
          Security
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-[#94A3B8] text-sm font-light hover:bg-[#F0F6FE] hover:text-[#0D6EFD] rounded-[6px] px-4 py-3"
        >
          <BellSimple size={20} />
          Notifications
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-[#94A3B8] text-sm font-light hover:bg-[#F0F6FE] hover:text-[#0D6EFD] rounded-[6px] px-4 py-3"
        >
          <Money size={20} />
          Pricing
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-[#94A3B8] text-sm font-light hover:bg-[#F0F6FE] hover:text-[#0D6EFD] rounded-[6px] px-4 py-3"
        >
          <Tag size={20} />
          Sales
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-sm font-light bg-[#F0F6FE] text-[#0D6EFD] rounded-[6px] px-4 py-3"
        >
          <Lock size={20} />
          Users & Roles
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-[#94A3B8] text-sm font-light hover:bg-[#F0F6FE] hover:text-[#0D6EFD] rounded-[6px] px-4 py-3"
        >
          <Cloud size={20} />
          Backups
        </Link>
      </div>
      {/* Sidebar Footer */}
      <div className="px-2 pb-4">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 text-[#475569] text-sm font-medium border border-[#475569] px-4 py-3 rounded-[6px] w-full"
        >
          <SignOut size={20} />
          Back to Dashboard
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
