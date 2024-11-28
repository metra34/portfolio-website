'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import IconLink from '../buttons/icon-link';

const AppNav = () => {
  return (
    <nav className="grid grid-cols-6 px-4 py-4 mb-4 bg-neutral-900">
      {/* <Avatar
        className="h-10 w-10"
        alt="Site Logo"
        src="/assets/images/logo.svg"
        type="image/svg+xml"
      /> */}
      {/* flex flex-wrap items-center justify-center  */}
      <div className="col-span-5 flex flex-wrap items-center justify-start gap-4 text-xl font-semibold md:col-span-4 md:col-start-2 md:justify-center">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="col-span-1 flex items-center justify-end gap-2 text-xl">
        <IconLink href="https://github.com/metra34">
          <FaGithub className="size-6 fill-pink-600 hover:fill-pink-50" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/artem-clement">
          <FaLinkedin className="size-6 fill-pink-600 hover:fill-pink-50" />
        </IconLink>
      </div>
    </nav>
  );
};

export default AppNav;
