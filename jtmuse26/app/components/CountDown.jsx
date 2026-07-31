import { useState, useEffect } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-09T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-3 sm:space-x-6">
      {/* Days */}
      <div className="text-center">
        <div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
          style={{ fontFamily: "Nexa, Arial, sans-serif" }}
        >
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
          Days
        </div>
      </div>

      <div className="text-2xl sm:text-3xl text-[#dfc797] opacity-60">:</div>

      {/* Hours */}
      <div className="text-center">
        <div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
          style={{ fontFamily: "Nexa, Arial, sans-serif" }}
        >
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
          Hours
        </div>
      </div>

      <div className="text-2xl sm:text-3xl text-[#dfc797] opacity-60">:</div>

      {/* Minutes */}
      <div className="text-center">
        <div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
          style={{ fontFamily: "Nexa, Arial, sans-serif" }}
        >
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
          Minutes
        </div>
      </div>

      <div className="text-2xl sm:text-3xl text-[#dfc797] opacity-60">:</div>

      {/* Seconds */}
      <div className="text-center">
        <div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
          style={{ fontFamily: "Nexa, Arial, sans-serif" }}
        >
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
          Seconds
        </div>
      </div>
    </div>
  );
};
export default CountDown;
