export const bringTheYesterday = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
};

export const bringTheWeek = () => {
  const endDay = new Date();
  const startDay = new Date(endDay);
  startDay.setDate(startDay.getDate() - 7);
  return { startDay: startDay, endDay: endDay };
};

export const bringTheMonth = () => {
  const endDay = new Date();
  const startDay = new Date(endDay);
  startDay.setDate(endDay.getDate() - 30);
  return { startDay: startDay, endDay: endDay };
};
