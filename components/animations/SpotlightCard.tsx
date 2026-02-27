import React, { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  borderColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
  borderColor = 'border-neutral-800'
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');

    const update = () => {
      const matches = mediaQuery.matches;
      setIsTouchDevice(matches);
      if (matches) {
        setIsFocused(false);
        setOpacity(0);
      }
    };

    update();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', update);
      return () => mediaQuery.removeEventListener('change', update);
    }

    // Safari < 14
    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isFocused || isTouchDevice) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    if (isTouchDevice) return;
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    if (isTouchDevice) return;
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={isTouchDevice ? undefined : handleMouseMove}
      onFocus={isTouchDevice ? undefined : handleFocus}
      onBlur={isTouchDevice ? undefined : handleBlur}
      onMouseEnter={isTouchDevice ? undefined : handleMouseEnter}
      onMouseLeave={isTouchDevice ? undefined : handleMouseLeave}
      className={`relative rounded-3xl ${borderColor} bg-neutral-900 overflow-hidden border-4 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: isTouchDevice ? 0 : opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
