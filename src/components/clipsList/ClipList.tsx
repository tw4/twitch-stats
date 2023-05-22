import { Clip } from '@/types';
import ClipCard from '@/components/clipCard/ClipCard';
import { FC } from 'react';

type IProps = {
  clipList: Clip[];
};

const ClipList: FC<IProps> = ({ clipList }) => {
  return (
    <div
      data-testid="clip-list-container"
      className="grid grid-cols-5 gap-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1"
    >
      {clipList.map((clip: Clip) => {
        return <ClipCard clip={clip} />;
      })}
    </div>
  );
};

export default ClipList;
