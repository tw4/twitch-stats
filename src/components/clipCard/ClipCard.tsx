import { Clip } from '@/types';
import { FC } from 'react';
import Link from 'next/link';

type IProps = {
  clip: Clip;
};

const ClipCard: FC<IProps> = ({ clip }) => {
  return (
    <div key={clip.id} className="w-[260px] dark:text-white">
      {/* clip banner */}
      <div className="relative  cursor-pointer h-[147px] w-[260px] hover:border-l-purple-500 duration-100 hover:border-b-purple-500 hover:border-l-8 hover:border-b-8">
        <Link
          aria-label="clip-card-link"
          href={`/clip/${clip.id}`}
          className="absolute"
        >
          <img
            className="z-0"
            src={clip.thumbnail_url}
            alt={clip.broadcaster_name}
          />
          <p className="absolute bg-gray-800 text-sm text-white top-0 left-0 p-1 z-10">
            {clip.duration}s
          </p>
          <p className="absolute bg-gray-800 text-sm text-white bottom-0 left-0 p-1 z-10">
            {clip.view_count} view count
          </p>
          <p className="absolute bg-gray-800 text-sm text-white bottom-0 right-0 p-1 z-10">
            {/*in this line we split the date object to get only the date*/}
            {clip.created_at.toString().slice(0, 10)}
          </p>
        </Link>
      </div>
      {/*Clip body*/}
      <div className="p-2">
        <p className="font-bold">
          {clip.title.length >= 25
            ? `${clip.title.slice(0, 22)}...`
            : clip.title}
        </p>
        <Link
          aria-label="clip-card-broadcaster-name"
          className="text-sm block hover:text-purple-500"
          href={`/streamer/${clip.broadcaster_name}`}
        >
          {clip.broadcaster_name}
        </Link>
        <Link
          aria-label="clip-card-creator-name"
          className="text-sm block hover:text-purple-500"
          href={`/streamer/${clip.creator_name}`}
        >
          Clipped by {clip.creator_name}
        </Link>
      </div>
    </div>
  );
};

export default ClipCard;
