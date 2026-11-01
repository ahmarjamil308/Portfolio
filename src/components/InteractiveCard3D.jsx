import { useState, useRef } from 'react';

export default function InteractiveCard3D({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotX, y: rotY });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.35
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <div
      ref={cardRef}
      className={`interactive-3d-card ${className} ${isHovered ? 'card-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
      }}
      {...props}
    >
      {glare && (
        <div
          className="card-glare-effect"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 65%)`,
            opacity: glarePos.opacity
          }}
        />
      )}
      {children}
    </div>
  );
}
