import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div className={`loading-screen ${progress >= 100 ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center font-bold text-2xl text-white animate-glow">
            D
          </div>
          <span className="text-3xl font-bold text-white">
            Dev<span className="gradient-text">Studio</span>
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-[#1A1A25] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-full transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <p className="text-[#8888AA] text-sm font-medium tracking-wider uppercase">
          Loading Experience...
        </p>
      </div>
    </div>
  );
}
