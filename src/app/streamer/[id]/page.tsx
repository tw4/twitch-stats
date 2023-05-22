import { FC } from 'react';

type IProps = {
  params: { id: string };
};
const StreamerDeal: FC<IProps> = ({ params }) => {
  return <div>Hello world id = {params.id}</div>;
};

export default StreamerDeal;
