export const formatCityLocalTime = (timezone, timestamp) => {
  if (!timezone) return null;

  const nowUtc = Date.now();

  const cityTime = new Date(nowUtc + timezone * 1000);

  return cityTime.toLocaleString("en-EN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
};
