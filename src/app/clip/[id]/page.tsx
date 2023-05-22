import { FC } from 'react';

type IProps = {
  params: { id: string };
};

const ClipPage: FC<IProps> = ({ params }) => {
  return <div>{params.id}</div>;
};

export default ClipPage;
