import Image from 'next/image';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

type UserInfoCardProps = {
  avatarUrl: string;
  name: string;
  summary: string;
  title: string;
  location: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
  };
};

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  avatarUrl,
  name,
  title,
  summary,
  location,
  socialLinks
}) => {
  return (
    <div className="mx-auto w-full space-y-1 rounded-lg bg-neutral-900 p-6 px-8 text-neutral-100 shadow-lg">
      <div className="mb-4 flex justify-center">
        <Image
          width={96}
          height={96}
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="size-24 rounded-full border-4 border-neutral-100"
        />
      </div>
      <h2 className="text-center text-xl font-semibold">{name}</h2>
      <h6 className="text-center text-neutral-400">{title}</h6>
      <p className="pb-4 pt-2 px-4 text-center">{summary}</p>
      <div className="flex items-center justify-center gap-2">
        {/* TODO add location icon */}
        <FaLocationDot className="" />
        <span className="text-center text-sm text-gray-400">{location}</span>
      </div>
      <div className="flex justify-center space-x-4">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            aria-label="GitHub"
            className="transition hover:text-gray-400"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            aria-label="LinkedIn"
            className="transition hover:text-gray-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
