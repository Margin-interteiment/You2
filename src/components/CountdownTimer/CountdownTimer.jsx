import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addLeadingZero = (value) => String(value).padStart(2, "0");

  return (
    <div className="countdown-wrapper">
      <div className="time-boxes">
        <div className="time-block">
          <div className="time-value">{addLeadingZero(timeLeft.days)}</div>
          <div className="time-label">Дней</div>
        </div>
        <div className="separator">:</div>
        <div className="time-block">
          <div className="time-value">{addLeadingZero(timeLeft.hours)}</div>
          <div className="time-label">Часов</div>
        </div>
        <div className="separator">:</div>
        <div className="time-block">
          <div className="time-value">{addLeadingZero(timeLeft.minutes)}</div>
          <div className="time-label">Минут</div>
        </div>
        <div className="separator">:</div>
        <div className="time-block">
          <div className="time-value">{addLeadingZero(timeLeft.seconds)}</div>
          <div className="time-label">Секунд</div>
        </div>
      </div>
    </div>
  );
}
