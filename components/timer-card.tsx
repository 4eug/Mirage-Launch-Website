import { useState, useEffect } from 'react';

const TimerCard = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const countdownDate = new Date('2023-06-20T00:00:00').getTime();
      const now = new Date().getTime();
      const timeDifference = countdownDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="flex justify-center lg:gap-x-[150px] md:gap-x-[100px] gap-x-[40px]">
        <div className="flex flex-col items-center">
          <span className="lg:text-core80 md:text-core60  text-h2 font-bold">
            {timeLeft.days}
          </span>
          <span className="lg:text-h5 md:text-h5 text-xs font-medium">
            Days
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-core80 md:text-core60 text-h2 font-bold">
            {timeLeft.hours}
          </span>
          <span className="lg:text-h5 md:text-h5 text-xs font-medium">
            Hours
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-core80 md:text-core60  text-h2 font-bold">
            {timeLeft.minutes}
          </span>
          <span className="lg:text-h5 md:text-h5 text-xs font-medium">
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-core80 md:text-core60  text-h2 font-bold">
            {timeLeft.seconds}
          </span>
          <span className="lg:text-h5 md:text-h5 text-xs font-medium">
            Seconds
          </span>
        </div>
      </div>
      <div className="mt-10 text-h5">To Lanuch</div>
    </section>
  );
};

export default TimerCard;
