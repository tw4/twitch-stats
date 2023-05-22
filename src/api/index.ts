import {
  bringTheYesterday,
  bringTheWeek,
  bringTheMonth,
} from '@/utils/getDate';

const header = {
  'Client-ID': `${process.env.CLIENT_ID}`,
  Authorization: 'Bearer ' + `${process.env.AUTHORIZATION_TOKEN}`,
};

export const getUserData = async (username: string) => {
  const res = await fetch(
    `${process.env.API_URL}` + '/helix/users?login=' + username,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};

export const getTopStreamersList = async () => {
  const res = await fetch(`${process.env.API_URL}` + '/helix/streams', {
    method: 'GET',
    headers: header,
  });

  return res.json();
};

export const getTopClipsToDay = async () => {
  const yesterday = bringTheYesterday().toISOString();
  const res = await fetch(
    `${process.env.API_URL}/helix/clips?game_id=509658&started_at=${yesterday}`,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};

export const getTopClipsWeek = async () => {
  const week = bringTheWeek();
  const res = await fetch(
    `${
      process.env.API_URL
    }/helix/clips?game_id=509658&started_at=${week.startDay.toISOString()}&ended_at=${week.endDay.toISOString()}`,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};

export const getTopClipsMonth = async () => {
  const month = bringTheMonth();
  const res = await fetch(
    `${
      process.env.API_URL
    }/helix/clips?game_id=509658&started_at=${month.startDay.toISOString()}&ended_at=${month.endDay.toISOString()}`,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};
