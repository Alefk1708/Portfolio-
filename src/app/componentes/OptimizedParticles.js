"use client";

import { useEffect, useRef } from "react";

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1000;

export default function OptimizedParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return undefined;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    let width = 0;
    let height = 0;
    let particles = [];
    let frameId = 0;
    let resizeTimer = 0;
    let lastFrame = 0;
    let running = false;
    let reducedMotion = reducedMotionQuery.matches;
    let pointRgb = "246, 243, 243";
    let linkRgb = "246, 243, 243";
    let accentRgb = "223, 47, 73";

    const pointer = { x: -1000, y: -1000, active: false };

    const readThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      pointRgb = styles.getPropertyValue("--particle-point-rgb").trim() || pointRgb;
      linkRgb = styles.getPropertyValue("--particle-link-rgb").trim() || linkRgb;
      accentRgb = styles.getPropertyValue("--particle-accent-rgb").trim() || accentRgb;
    };

    const getParticleCount = () => {
      let count = width < MOBILE_BREAKPOINT ? 22 : width < TABLET_BREAKPOINT ? 34 : 48;
      if ((navigator.hardwareConcurrency || 8) <= 4) count = Math.round(count * 0.75);
      return count;
    };

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      radius: 0.7 + Math.random() * 1.05,
      accent: Math.random() < 0.1,
    });

    const draw = (moveParticles = true) => {
      context.clearRect(0, 0, width, height);

      const linkDistance = width < MOBILE_BREAKPOINT ? 105 : 145;
      const linkDistanceSquared = linkDistance * linkDistance;

      if (moveParticles) {
        for (const particle of particles) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -4) particle.x = width + 4;
          else if (particle.x > width + 4) particle.x = -4;
          if (particle.y < -4) particle.y = height + 4;
          else if (particle.y > height + 4) particle.y = -4;
        }
      }

      context.lineWidth = 0.7;
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const dx = particle.x - next.x;
          const dy = particle.y - next.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared >= linkDistanceSquared) continue;

          const distance = Math.sqrt(distanceSquared);
          const opacity = (1 - distance / linkDistance) * 0.18;
          context.strokeStyle = `rgba(${linkRgb}, ${opacity})`;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(next.x, next.y);
          context.stroke();
        }

        if (pointer.active && finePointerQuery.matches) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distanceSquared = dx * dx + dy * dy;
          const pointerDistance = 135;

          if (distanceSquared < pointerDistance * pointerDistance) {
            const opacity = (1 - Math.sqrt(distanceSquared) / pointerDistance) * 0.32;
            context.strokeStyle = `rgba(${accentRgb}, ${opacity})`;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(pointer.x, pointer.y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.fillStyle = particle.accent
          ? `rgba(${accentRgb}, 0.72)`
          : `rgba(${pointRgb}, 0.64)`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
    };

    const loop = (time) => {
      if (!running) return;
      frameId = window.requestAnimationFrame(loop);

      const targetFps = width < MOBILE_BREAKPOINT ? 24 : 30;
      const frameInterval = 1000 / targetFps;
      if (time - lastFrame < frameInterval) return;

      lastFrame = time - ((time - lastFrame) % frameInterval);
      draw(true);
    };

    const stop = () => {
      running = false;
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const start = () => {
      stop();
      if (reducedMotion) {
        draw(false);
        return;
      }
      running = true;
      lastFrame = 0;
      frameId = window.requestAnimationFrame(loop);
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles = Array.from({ length: getParticleCount() }, createParticle);
      readThemeColors();
      draw(false);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (!document.hidden) start();
      }, 120);
    };

    const handlePointerMove = (event) => {
      if (!finePointerQuery.matches) return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleMotionPreference = (event) => {
      reducedMotion = event.matches;
      start();
    };

    const themeObserver = new MutationObserver(() => {
      readThemeColors();
      if (reducedMotion) draw(false);
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotionQuery.addEventListener("change", handleMotionPreference);

    resize();
    if (!document.hidden) start();

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      themeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
