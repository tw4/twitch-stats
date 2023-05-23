'use client';
import { getClipById, getClipsByBroadcasterId } from '@/api';
import ClipList from '@/components/clipsList/ClipList';
import { Clip } from '@/types';
import { FC, useEffect, useState } from 'react';

type IProps = {
  params: { id: string };
};

const ClipPage: FC<IProps> = ({ params }) => {
  const [clip, setClip] = useState<Clip[]>([]);
  const [clips, setClips] = useState<Clip[]>([]);

  useEffect(() => {
    getClipById(params.id).then(res => {
      setClip(res.data);
      getClipsByBroadcasterId(res.data[0].broadcaster_id).then(result =>
        setClips(result.data)
      );
    });
  }, []);
  return (
    <div>
      {clip.map(clip => {
        return (
          <div>
            <iframe
              className="w-[85vw] h-[50vh]"
              src={`${clip.embed_url}&parent=${process.env.PARENT}`}
              allowFullScreen
            ></iframe>
            <div className="mt-5 dark:text-white">
              <p className="mt-2 border-l-4 border-l-purple-500 pl-2">
                {clip.created_at.toString().slice(0, 10)}
              </p>
              <p className="mt-2">{clip.title}</p>
              <p className="mt-2"> {clip.view_count} views </p>
            </div>
          </div>
        );
      })}
      <div>
        <p className="font-bold text-3xl pt-5 pb-5 dark:text-white">
          OTHER CLIPS
        </p>
        <ClipList clipList={clips} />
      </div>
    </div>
  );
};

export default ClipPage;
