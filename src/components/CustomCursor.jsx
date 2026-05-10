import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const addHoverListeners = () => {
      const hoverEls = document.querySelectorAll('a, button, .card, input, textarea, select');
      hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', () => setVisible(false));
    
    // Re-add listeners when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor ${hovering ? 'hover' : ''}`}
      style={{
        left: pos.x - 10,
        top: pos.y - 10,
      }}
    />
  );
}
