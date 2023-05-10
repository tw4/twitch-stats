import { useRouter } from 'next/router';

const StreamerDeal = () => {
  const route = useRouter();
  const userID = route.query.id;
  return <div>Hello world id = {userID}</div>;
};

export default StreamerDeal;
