"use client";
import { navLinks } from "@/lib/contstants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathName = usePathname();
  return (
    <div className="gap-16 h-screen left-0 top-0 p-10 flex flex-col bg-blue-2 shadow-xl max-lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={20} />
      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            className={`flex gap-4 text-body-medium ${
              pathName === link.url ? "text-blue-1" : ""
            }`}
            href={link.url}
            key={link.label}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <p>Edit profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
