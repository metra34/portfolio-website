"use client";

import Link from "next/link";
import IconButton from "../buttons/IconButton";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Avatar } from "../avatar/avatar";

const AppNav = () => {
  return (
    <nav className="grid grid-cols-6 px-4 py-4">
      <Avatar
        className="h-10 w-10"
        alt="Site Logo"
        src="/assets/images/logo.svg"
        type="image/svg+xml"
      />
      <div className="col-span-5 flex flex-wrap items-center justify-end gap-4 text-xl font-semibold md:col-span-4 md:justify-center">
        <Link href="/">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="col-span-2 flex items-center justify-end gap-2 text-xl font-semibold md:col-span-1">
        <IconButton onClick={() => alert("clicked!")}>
          <FaGithub className="h-6 w-6 fill-pink-600 hover:fill-pink-50" />
        </IconButton>
        <IconButton onClick={(e: unknown) => alert("clicked!")}>
          <FaLinkedin className="h-6 w-6 fill-pink-600 hover:fill-pink-50" />
        </IconButton>
      </div>
    </nav>
  );
};

export default AppNav;
