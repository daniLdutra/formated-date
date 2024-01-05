import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

export const Clock = () => {
  const [dateHourCurrent, setDateHourCurrent] = useState(DateTime.local());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateHourCurrent(DateTime.local());
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="p-12 bg-orange-400 rounded-full shadow-lg">
        <h2>Date and Hour Current: </h2>
        <p>{dateHourCurrent.toFormat('dd/MM/yyyy - HH:mm:ss')}</p>
      </div>
    </>
  );
};
