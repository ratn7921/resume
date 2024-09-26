import React, { useEffect, useRef, useState } from 'react';
import './BackgroundVideo.css';
import BackgroundVideoSource from '../assets/49ffcea0e256c621e74709d68ff78a39.mp4';

function BackgroundVideo() {
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newPlaybackRate = Math.max(0.1, 1 - scrollY / 1000);
      setPlaybackRate(newPlaybackRate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className="background-video">
      <video ref={videoRef} autoPlay muted loop>
        <source src={BackgroundVideoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="background-overlay" />
    </div>
  );
}

export default BackgroundVideo;
