import { useState, useRef, useEffect, useCallback } from "react";

/**
 * VanishSection
 * 
 * Provides a clean, crisp fade-out / fade-in interaction:
 * - When cursor hovers down towards the bottom half of the section -> smoothly fades out (NO blur, pure clean opacity + subtle glide).
 * - When cursor moves up again -> immediately starts to smoothly fade back in.
 * - Activates naturally within the section (not waiting until the user skips to the next section).
 * - Preserves button/link interactivity and mobile responsiveness.
 */
export default function VanishSection({ children, id, className = "" }) {
  const containerRef = useRef(null);
  const [isFaded, setIsFaded] = useState(false);
  const lastYRef = useRef(null);
  const isTouchDeviceRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      isTouchDeviceRef.current = !window.matchMedia("(hover: hover)").matches;
    }
  }, []);

  // Mouse tracking for smooth fade-out when hovering towards bottom, and fade-in when moving up
  const handleMouseMove = useCallback((e) => {
    if (isTouchDeviceRef.current || !containerRef.current) return;

    // If hovering directly over an interactive element (button or link), keep visible
    if (e.target && e.target.closest && e.target.closest("a, button, input, textarea, select")) {
      setIsFaded(false);
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const currentY = e.clientY;
    const prevY = lastYRef.current ?? currentY;
    lastYRef.current = currentY;

    // Relative Y within the section: 0 = top, 1 = bottom
    const relativeY = (currentY - rect.top) / rect.height;

    const isMovingUp = currentY < prevY - 2;
    const isMovingDown = currentY > prevY + 2;

    if (isMovingUp) {
      // Moving cursor up again -> immediately start to fade back in
      setIsFaded(false);
    } else if (relativeY > 0.50 && isMovingDown) {
      // Hovering down towards bottom of the section -> smoothly fade out
      setIsFaded(true);
    } else if (relativeY > 0.70) {
      // In the lower section -> stay faded out
      setIsFaded(true);
    } else if (relativeY < 0.45) {
      // Re-entering upper half -> fully visible
      setIsFaded(false);
    }
  }, []);

  const handleMouseEnter = useCallback((e) => {
    if (isTouchDeviceRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeY = (e.clientY - rect.top) / rect.height;

    // Entering in upper or middle area -> fully visible
    if (relativeY < 0.60) {
      setIsFaded(false);
    }
    lastYRef.current = e.clientY;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    if (isTouchDeviceRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // If cursor exits upwards or through the sides, restore full visibility
    if (e.clientY <= rect.top + 30) {
      setIsFaded(false);
    }
    lastYRef.current = null;
  }, []);

  // When scrolling up, ensure section fades back in smoothly
  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY - 8) {
        setIsFaded(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${className}`}
      style={{ pointerEvents: "auto" }}
    >
      {/* Animated Inner Content: pure clean fade-out (NO BLUR) */}
      <div
        className="w-full will-change-transform"
        style={{
          opacity: isFaded ? 0.04 : 1,
          transform: isFaded ? "translateY(24px)" : "translateY(0px)",
          transition:
            "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: isFaded ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
