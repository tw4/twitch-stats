import { Streams } from '@/types';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type IProps = {
  streams: Streams;
  isNarrow: boolean;
};

const LeftNavigationItem: FC<IProps> = ({ streams, isNarrow }) => {
  return (
    <Link
      href={'/streamer/' + streams.user_login}
      className="flex flex-row items-center justify-between space-x-3 mt-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 "
    >
      {/*left side*/}
      <img
        src={streams.thumbnail_url
          .replace('{width}', '80')
          .replace('{height}', '40')}
        alt={streams.user_login}
      />
      {/* mid side */}
      <p
        className={`w-28 break-all text-start text-sm ${
          isNarrow ? 'hidden' : ''
        } md:hidden`}
      >
        {streams.user_login}
      </p>

      {/*right side*/}
      <div
        className={`flex flex-row w-16 items-center space-x-1 ${
          isNarrow ? 'hidden' : ''
        } pr-1 lg:hidden`}
      >
        <div
          data-testid="live-icon"
          className="h-2 w-2 rounded-full bg-red-500"
        ></div>
        <p className="text-sm">{streams.viewer_count}</p>
      </div>
    </Link>
  );
};

export default LeftNavigationItem;
