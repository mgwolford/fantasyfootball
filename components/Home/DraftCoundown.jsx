import { useEffect, useState } from "react";

function DraftCountdown() {
  const draftDate = new Date("2026-08-31T18:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = draftDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <button type="button" className="champion-callout" aria-label="Celebrate the 2025 champion">
        <span className="champion-content">
          <span className="champion-label">2025 Champion</span>
          <span className="champion-name">Daniel!</span>
        </span>
        <span className="champion-confetti" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
      </button>
      <h2>Draft Countdown</h2>

      {timeLeft ? (
        <div className="countdown-box">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      ) : (
        <p>Draft Day is here.</p>
      )}

      <p className="draft-date-text">Draft Date: August 31, 2026 at 6:00 PM</p>
    </section>
  );
}

export default DraftCountdown;