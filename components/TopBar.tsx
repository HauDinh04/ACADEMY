"use client"
import { useAuth, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";

const TopBar = () => {
  const {userId} =useAuth();
  console.log('id',{userId});
  const topRoutes = [{ label: "Hướng Dẫn", path: "/instructor/sources" }, {label:"Học",path:"/learning"}];
  return (
    <div className="flex justify-between items-center p-4">
      <Link href={"/"}>
        <Image src={"/"} alt="logo" width={100} height={100}></Image>
      </Link>
      <div className="max-md:hidden w-[400px] rounded-full flex">
        <input
          type="text"
          className="flex-grow rounded-l-full border-none bg-[#F8EDE3] outline-none text-sm pl-4 py-3 "
          placeholder="Tìm kiếm khóa học ..."
        />
        <button className="bg-[#DFD3C3] rounded-r-full border-none outline-none cursor-pointer py-3 px-4 hover:bg-[#F8EDE3]/70">
          <Search className="h-4 w-4" />
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6" >
            {topRoutes.map((route)=>(
              <Link href={route.path} key={route.path} className="text-sm font-medium hover:text-[#FFB22C]">{route.label}</Link>
            ))}
        </div>
        {userId ?  <UserButton afterSignOutUrl="/sign-in" />:<Link href={'/sign-in'}><Button>Đăng Nhập</Button></Link>}
      
      </div>
      
    </div>
  );
};

export default TopBar;
