import Image from "next/image";
import Link from "next/link";
import {
  BellSimple,
  Wallet,
  Question,
  Gear,
  MagnifyingGlass,
  CaretDown,
  List,
} from "@phosphor-icons/react/dist/ssr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white flex items-center justify-between gap-10 px-3.5 lg:px-10 py-6 shadow">
      <div className="flex items-center gap-6 w-full">
        {/* <List size={25} /> */}
        <Image src={"/assets/logo.png"} alt="logo" height={49} width={48} />
        <form className="relative w-full max-w-lg">
          <input
            type="text"
            className="w-full text-sm bg-gray-100 rounded-[6px] pl-9 pr-4 py-3 placeholder:text-xs placeholder:text-[#667185]"
            placeholder="Search here..."
          />
          <MagnifyingGlass
            size={18}
            className="absolute top-1/2 transform -translate-y-1/2 left-3 text-[#475367]"
          />
        </form>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 text-[#647995] text-xs font-light">
          <Link
            href={"/"}
            className="flex flex-col items-center gap-2 hover:text-primaryBlue"
          >
            <BellSimple size={19} />
            Notifications
          </Link>
          <Link
            href={"/"}
            className="flex flex-col items-center gap-2 hover:text-primaryBlue"
          >
            <Wallet size={19} />
            Wallet
          </Link>
          <Link
            href={"/"}
            className="flex flex-col items-center gap-2 hover:text-primaryBlue"
          >
            <Question size={19} />
            Inquiries
          </Link>
          <Link
            href={"/"}
            className="flex flex-col items-center gap-2 text-primaryBlue"
          >
            <Gear size={19} weight="duotone" />
            Settings
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={"/assets/avatar.jpeg"}
                height={32}
                width={32}
                className="object-cover"
                alt="Avatar"
              />
            </div>
            <CaretDown size={11} color="#667185" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white mt-3 mr-3 ">
            <DropdownMenuItem className="text-[#647995] text-xs cursor-pointer hover:text-primaryBlue">Notifications</DropdownMenuItem>
            <DropdownMenuItem className="text-[#647995] text-xs cursor-pointer hover:text-primaryBlue">Wallet</DropdownMenuItem>
            <DropdownMenuItem className="text-[#647995] text-xs cursor-pointer hover:text-primaryBlue">Inquiries</DropdownMenuItem>
            <DropdownMenuItem className="text-[#647995] text-xs cursor-pointer hover:text-primaryBlue">Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
