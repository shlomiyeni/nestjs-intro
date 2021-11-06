export const setFutureDateByDays = (days: number): Date => {
  const date = new Date();
  date.setDate(new Date().getDate() + days);
  return date;
};

export const getDate = (seconds) => new Date(seconds * 1000);
