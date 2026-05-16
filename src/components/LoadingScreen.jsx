import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="loader" />
        <p className="text-sm text-gray-400 font-medium tracking-wider">CRÉATION SITE WEB RABAT</p>
      </div>
    </div>
  );
}
