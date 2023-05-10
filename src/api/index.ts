export const getUserData = async (username: string) => {
  const res = await fetch(
    `${process.env.API_URL}` + '/helix/users?login=' + username,
    {
      method: 'GET',
      headers: {
        'Client-ID': `${process.env.CLIENT_ID}`,
        Authorization: 'Bearer ' + `${process.env.AUTHORIZATION_TOKEN}`,
      },
    }
  );

  return res.json();
};
