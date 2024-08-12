import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      hOME
    <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  );
}
