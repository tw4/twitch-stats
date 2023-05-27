'use client';
import { getClipsByBroadcasterId, getUserData } from '@/api';
import ClipList from '@/components/clipsList/ClipList';
import { Clip, User } from '@/types';
import { FC, useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go';

type IProps = {
  params: { username: string };
};
const StreamPage: FC<IProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [clips, setClips] = useState<Clip[]>([]);

  useEffect(() => {
    getUserData(params.username).then(res => {
      setUser(res.data[0]);
      setIsLoading(true);
      getClipsByBroadcasterId(res.data[0].id).then(result =>
        setClips(result.data)
      );
    });
  }, []);

  return (
    <div className="overflow-y-scroll h-[89.2vh] scrollbar">
      {isLoading ? (
        <div className="dark:text-white">
          <iframe
            data-testid="stream"
            className="w-full h-[50vh]"
            src={`https://player.twitch.tv/?channel=${user?.login}&parent=${process.env.PARENT}`}
            height="720"
            width="1280"
          ></iframe>
          {/* streamer info side */}
          <div className="mt-5  flex flex-row items-center space-x-2">
            <img
              className="rounded-full w-20"
              src={user?.profile_image_url}
              alt={user?.login}
            />
            <p className="font-bold dark">{user?.display_name}</p>
            {user?.broadcaster_type === 'partner' ? (
              <GoVerified data-testid="verified" className="text-purple-500" />
            ) : null}
          </div>
          {/* description side */}
          <div className="flex justify-center p-20">
            <div className="bg-white  w-full p-10 dark:bg-[#18181b]">
              <div className="flex flex-row items-center space-x-3">
                <h2 className="font-bold text-3xl ">
                  About {user?.display_name}
                </h2>
                {user?.broadcaster_type === 'partner' ? (
                  <GoVerified
                    data-testid="verified-about"
                    className="text-purple-500 text-3xl"
                  />
                ) : null}
              </div>
              <p className="mt-10">{user?.description}</p>
            </div>
          </div>
          <div className="p-10">
            <p className="font-bold text-3xl pt-5 pb-5 ">OTHER CLIPS</p>
            <ClipList clipList={clips} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StreamPage;
