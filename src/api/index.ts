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
