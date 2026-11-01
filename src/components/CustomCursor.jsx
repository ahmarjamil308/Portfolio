import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Track hover on interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-card') ||
        target.closest('.service-card') ||
        target.closest('.skill-tag') ||
        target.closest('.hero-visual-3d-wrap') ||
        target.closest('.filter-btn')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  // Smooth trailing effect for outer ring
  useEffect(() => {
    if (isTouch) return;
    let animId;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22
      }));
      animId = requestAnimationFrame(followCursor);
    };
    animId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision inner dot */}
      <div
        className={`custom-cursor-dot ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />
      {/* Outer trailing aura */}
      <div
        className={`custom-cursor-follower ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      />
    </>
  );
}

