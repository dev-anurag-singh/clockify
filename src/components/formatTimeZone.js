export async function getTimezone() {
  const res = await fetch('https://worldtimeapi.org/api/ip');

  if (!res.ok) throw Error('Failed getting your timezone');

  const data = await res.json();

  const code = data.abbreviation;
  const timezone = data.timezone;
  const weekNumber = data.week_number;
  const dayOfYear = data.day_of_year;
  const dayOfWeek = data.day_of_week;

  return { code, timezone, weekNumber, dayOfWeek, dayOfYear };
}
