import { bringDate } from '@/types';

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
  const week: bringDate = { startDay: startDay, endDay: endDay };
  return week;
};

export const bringTheMonth = () => {
  const endDay = new Date();
  const startDay = new Date(endDay);
  startDay.setDate(endDay.getDate() - 30);
  const month: bringDate = { startDay: startDay, endDay: endDay };
  return month;
};
