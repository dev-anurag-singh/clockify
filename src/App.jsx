import { useEffect, useState } from 'react';
import Home from './components/Home';
import formatDate from './components/formatDate';
import { getTimezone } from './components/formatTimeZone';

function App() {
  const [date, setDate] = useState(new Date());
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  const { hours, minutes } = formatDate(date);

  const isDay = hours > 6 && hours < 18;

  useEffect(() => {
    if (!isDay) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDay]);

  useEffect(() => {
    async function fetchTimezone() {
      try {
        const data = await getTimezone();

        setTimezone(data);
      } catch (err) {
        if (err) console.log(err);
      }
    }
    fetchTimezone();
  }, []);

  return (
    <>
      <Home timezoneDetails={timezone} isDay={isDay} time={`${hours}:${minutes}`} />
    </>
  );
}

export default App;
