import { MONTH_NAMES } from '../config/constants';

export const returnSuffix = (num) => {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) return `${num}st`;
  if (j === 2 && k !== 12) return `${num}nd`;
  if (j === 3 && k !== 13) return `${num}rd`;
  return `${num}th`;
}

export const formatDateTime = (timestamp) => {
  const date = new Date(timestamp*1000);
  const hours = (''+date.getHours()).padStart(2, '0');
  const minutes = (''+date.getMinutes()).padStart(2, '0');
  return `${returnSuffix(date.getDate())} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()} at ${hours}:${minutes}`;
}
