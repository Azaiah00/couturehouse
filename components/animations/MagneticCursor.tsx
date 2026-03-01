"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const cursorSetX = gsap.quickSetter(cursor, "x", "px");
    const cursorSetY = gsap.quickSetter(cursor, "y", "px");
    const followerSetX = gsap.quickSetter(follower, "x", "px");
    const followerSetY = gsap.quickSetter(follower, "y", "px");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    const pos = { x: mouseX, y: mouseY };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursorSetX(mouseX - 4);
      cursorSetY(mouseY - 4);
    };

    window.addEventListener("mousemove", onMouseMove);

    const ticker = () => {
      pos.x += (mouseX - pos.x) * 0.15;
      pos.y += (mouseY - pos.y) * 0.15;
      
      followerSetX(pos.x - 20);
      followerSetY(pos.y - 20);
    };
    
    gsap.ticker.add(ticker);

    const addMagneticEffect = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 0, duration: 0.2 });
      gsap.to(follower, { 
        scale: 1.5, 
        backgroundColor: "rgba(156, 209, 243, 0.1)", 
        borderColor: "rgba(156, 209, 243, 0.5)", 
        duration: 0.3 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { 
        scale: 1, 
        backgroundColor: "transparent", 
        borderColor: "rgba(156, 209, 243, 0.3)", 
        duration: 0.3 
      });
    };

    // Add effect on mount and route change
    addMagneticEffect();
    
    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(ticker);
      document.body.style.cursor = "auto";
      
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [pathname]);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-crimson rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-rose-gold/30 rounded-full pointer-events-none z-[9998] transition-colors hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
