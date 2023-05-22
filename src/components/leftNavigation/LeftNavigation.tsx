'use client';

import { CiLogout } from 'react-icons/ci';
import { getTopStreamersList } from '@/api';
import LeftNavigationItem from '@/components/leftNavigation/LeftNavigationItem';
import { Streams } from '@/types';
import { useEffect, useState } from 'react';

const LeftNavigation = () => {
  const [streamerList, setStreamerList] = useState<Streams[]>([]);
  const [isNarrow, setIsNarrow] = useState<boolean>(false);

  useEffect(() => {
    getTopStreamersList().then(res => {
      setStreamerList(res.data);
    });
  }, []);

  const isNarrowHandler = () => {
    setIsNarrow(!isNarrow);
  };

  return (
    <div
      className={`bg-[#efeff1] p-2  ${
        isNarrow ? 'w-fit' : 'w-[15vw]'
      } border-t-2 border-gray-200 dark:bg-[#1D1D20] dark:text-white dark:border-black lg:w-fit`}
    >
      {/* head */}
      {isNarrow ? (
        <CiLogout
          data-testid="expend-button"
          onClick={isNarrowHandler}
          fontSize="x-large"
          className="cursor-pointer rotate-180 hover:bg-gray-300 dark:hover:bg-gray-600"
        />
      ) : null}
      <div
        className={`flex flex-row items-center ${
          isNarrow ? 'hidden' : ''
        } justify-between lg:hidden`}
      >
        <p className="font-bold">Most Viewed Stream</p>
        <CiLogout
          data-testid="narrow-button"
          onClick={isNarrowHandler}
          fontSize="x-large"
          className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
        />
      </div>

      {/* body */}
      <div className="pt-2.5 h-[89.2vh] overflow-y-scroll scrollbar">
        {streamerList.map((streamer: Streams) => {
          return (
            <div key={streamer.id}>
              <LeftNavigationItem isNarrow={isNarrow} streams={streamer} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavigation;
