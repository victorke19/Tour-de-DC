import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

// countdown until the tour starts
function getTimeLeft(targetDate) {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

function LandingPage() {
  const navigate = useNavigate();
  const tourStart = new Date('2025-07-05T12:00:00Z');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(tourStart));

  useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(getTimeLeft(tourStart));
      }, 1000);
      return () => clearInterval(timer);
    }, [tourStart]);

  return (
    <div className="landing-background">
  <div className="overlay-content">
    <div className="bikes-animation">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src="/cyclist.png"
          alt="Bike"
          className="bike"
          style={{ animationDelay: `${i * 1.5}s` }}
        />
      ))}
    </div>
    <div style={{ textAlign: 'center', marginTop: '0vh', fontFamily: 'Barrio, cursvie'}}>
      {timeLeft ? (
        <div style={{ fontSize: '4em', marginTop: '0vh' }}>
            <h2>Countdown to Le Tour de France:</h2>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      ) : (
        <>
        <div className="content-box">
          <h2>Le Tour is Live!</h2>
        </div>
        <div className="live-btn-container">
          <button className="enter-btn" onClick={() => navigate('/main')}>
            Allez DC!
          </button>
        </div>
      </>
        
      )}
        </div>
  </div>
</div>
  );
}

export default LandingPage;