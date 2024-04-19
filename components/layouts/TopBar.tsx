"use client";
import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/contstants";

const TopBar = () => {
  const pathName = usePathname();
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={20} />
      <div className="flex max-md:hidden gap-8">
        {navLinks.map((link) => (
          <Link
            className={`flex gap-4 text-body-medium ${
              pathName === link.url ? "text-blue-1" : ""
            }`}
            href={link.url}
            key={link.label}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center relative">
        <Menu
          onClick={() => setDropDownMenu(!dropDownMenu)}
          className="cursor-pointer md:hidden"
        />
        {dropDownMenu && (
          <div className="absolute flex flex-col gap-8 top-10 right-6 p-5 bg-white shadow-xl rounded-lg">
            {navLinks.map((link) => (
              <Link
                className="flex gap-4 text-body-medium"
                href={link.url}
                key={link.label}
              >
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
