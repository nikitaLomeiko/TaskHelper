export const formatTimeMmHh = (isoString: string): string => {
  const date = new Date(isoString);
  return `${String(date.getMinutes()).padStart(2, "0")}:${String(date.getHours()).padStart(2, "0")}`;
};
