export const showFriendlyTime = dateTime => {
  return new Date(dateTime)
    .toLocaleTimeString()
    .match(/\d{2}:\d{2}|[AMP]+/g)
    .join(' ');
};
