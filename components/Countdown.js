import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const birthday = new Date("2025-07-20T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = birthday - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-lg text-pink-600 mt-2">
      เคานต์ดาวน์สู่วันเกิด:
      {` ${timeLeft.days} วัน ${timeLeft.hours} ชม. ${timeLeft.minutes} นาที ${timeLeft.seconds} วิ`}
    </div>
  );
}
