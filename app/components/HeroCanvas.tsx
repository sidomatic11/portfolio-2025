"use client";

import { useEffect, useRef } from 'react';
import {
  drawMouseFollow,
  createFloatingTriangles,
  updateFloatingTriangles,
  updateUserTriangles,
  createUserTriangle,
  FloatingTriangle,
  UserTriangle,
  ClickRipple
} from './interactions';

interface HeroCanvasProps {
  className?: string;
}

/**
 * HeroCanvas Component
 * 
 * Modular canvas component with easy interaction swapping.
 * 
 * To change interactions:
 * 1. Import the desired interaction from './interactions'
 * 2. Replace the function call in the animate loop
 * 3. Update any required parameters
 * 
 * Current interaction: Mouse Follow
 * Circles that smoothly follow your mouse cursor with lerped movement.
 */
export default function HeroCanvas({ className = "" }: HeroCanvasProps) {
  // React refs to store persistent values between renders
  const canvasRef = useRef<HTMLCanvasElement>(null);           // Reference to the canvas DOM element
  const animationIdRef = useRef<number | null>(null);         // Store animation frame ID for cleanup
  const isVisibleRef = useRef<boolean>(true);                 // Track if canvas is in viewport
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });     // Current mouse position
  const centerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });     // Animation center (follows mouse)
  const trianglePointsRef = useRef<{ x: number; y: number }[]>([]);       // Store in-progress triangle points (max 2)
  const trianglesRef = useRef<UserTriangle[]>([]); // Store completed user triangles
  const nextColorRef = useRef<string>('#FFA348');              // Track next triangle color
  const floatingTrianglesRef = useRef<FloatingTriangle[]>([]);  // Store floating background triangles
  const isTouchDeviceRef = useRef<boolean>(false);             // Track if device is touch-only
  const clickRipplesRef = useRef<ClickRipple[]>([]);           // Store active click ripples
  const hasUserClickedRef = useRef<boolean>(false);            // Track if user has made their first click
  const nextPulseTimeRef = useRef<number>(Date.now() + 3000);  // Next pulse time (3 seconds from now)

  // Additional refs for animation
  const timeRef = useRef<number>(0);                          // Global time for animations

  // useEffect runs after component mounts and handles setup/cleanup
  useEffect(() => {
    // Early return if canvas not ready
    if (!canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Detect if device is touch-only (no mouse/trackpad)
      // Use hover media query - most reliable for detecting precise pointer devices
      isTouchDeviceRef.current = !window.matchMedia('(hover: hover)').matches;

      /**
       * Canvas Setup & HiDPI Support
       * 
       * HiDPI (High DPI) displays have more pixels per inch, so we need to:
       * 1. Set actual canvas size to viewport size × device pixel ratio
       * 2. Set display size to viewport size
       * 3. Scale the drawing context to match
       * 
       * This ensures crisp rendering on retina displays and full viewport coverage
       */
      const resizeCanvas = () => {
        // Get device pixel ratio (how many physical pixels per CSS pixel)
        // Cap at 2 to avoid performance issues on very high DPI displays
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        // Get the hero section height to maintain proper aspect ratio
        const heroSection = canvas.closest('.hero-section') || canvas.parentElement;
        const heroRect = heroSection?.getBoundingClientRect();
        const heroHeight = heroRect?.height || window.innerHeight;

        // Set actual canvas size (in pixels) - full viewport width, hero section height
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(heroHeight * dpr);

        // Set display size (CSS pixels) - full viewport width, hero section height
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${heroHeight}px`;

        // Scale the drawing context to match device pixel ratio
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Reset animation centers to screen center on resize
        centerRef.current = { x: window.innerWidth / 2, y: heroHeight / 2 };
        mouseRef.current = { x: centerRef.current.x, y: centerRef.current.y };

        // Only initialize floating triangles on first load (not on resize)
        if (floatingTrianglesRef.current.length === 0) {
          floatingTrianglesRef.current = createFloatingTriangles(window.innerWidth, heroHeight);
        }
      };
      resizeCanvas(); // Initial setup

      /**
       * Mouse Tracking & Click Handling
       * 
       * We use window-level mouse tracking because:
       * - Canvas has pointer-events: none (so clicks pass through to content)
       * - We want to track mouse even when it's over other elements
       * 
       * Use pageX/pageY (document coordinates) instead of clientX/clientY (viewport coordinates)
       * so positions are correct when page is scrolled
       */
      const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.pageX, y: e.pageY };
      };

      /**
       * Click Handler
       * 
       * Touch devices: Single tap creates a random-dimension triangle
       * Mouse devices: Progressive triangle drawing (3 clicks)
       * 
       * Use pageX/pageY (document coordinates) instead of clientX/clientY (viewport coordinates)
       * so positions are correct when page is scrolled
       */
      const handleClick = (e: MouseEvent) => {
        const newPoint = { x: e.pageX, y: e.pageY };

        // Mark that user has clicked (stops the hint pulses)
        hasUserClickedRef.current = true;

        // Add click ripple effect (for visual feedback)
        const newRipple: ClickRipple = {
          x: newPoint.x,
          y: newPoint.y,
          createdAt: Date.now(),
          color: nextColorRef.current
        };
        clickRipplesRef.current = [...clickRipplesRef.current, newRipple];

        if (isTouchDeviceRef.current) {
          // TOUCH DEVICE: Create random triangle at tap location
          const baseSize = 30 + Math.random() * 60; // 30-90px base scale
          const height = (baseSize * Math.sqrt(3)) / 2;
          const variation = 0.25; // 25% variation from equilateral

          // Base equilateral triangle vertices (relative to tap point)
          const baseVertices = [
            { x: 0, y: -height / 1.5 },           // top
            { x: -baseSize / 2, y: height / 3 },  // bottom left
            { x: baseSize / 2, y: height / 3 }    // bottom right
          ];

          // Add random variation and convert to absolute coordinates
          const randomPoints = baseVertices.map(v => ({
            x: newPoint.x + v.x + (Math.random() - 0.5) * baseSize * variation,
            y: newPoint.y + v.y + (Math.random() - 0.5) * baseSize * variation
          }));

          const newTriangle = createUserTriangle(randomPoints, nextColorRef.current);
          trianglesRef.current = [...trianglesRef.current, newTriangle];

          // Alternate color
          nextColorRef.current = nextColorRef.current === '#FFA348' ? '#FFDA46' : '#FFA348';
        } else {
          // MOUSE DEVICE: Progressive triangle drawing (3 clicks)
          const currentPoints = trianglePointsRef.current;

          if (currentPoints.length < 2) {
            // Still collecting points (1st or 2nd click)
            trianglePointsRef.current = [...currentPoints, newPoint];
          } else {
            // 3rd click: Complete the triangle and make it drift
            const allPoints = [...currentPoints, newPoint];
            const newTriangle = createUserTriangle(allPoints, nextColorRef.current);

            // Add completed triangle
            trianglesRef.current = [...trianglesRef.current, newTriangle];

            // Reset for next triangle and alternate color
            trianglePointsRef.current = [];
            nextColorRef.current = nextColorRef.current === '#FFA348' ? '#FFDA46' : '#FFA348';
          }
        }
      };

      /**
       * Main Animation Loop
       * 
       * This is the heart of the animation. It runs 60fps and:
       * 1. Clears the canvas
       * 2. Updates global time
       * 3. Calls the current interaction function
       * 4. Schedules next frame
       */
      const animate = () => {
        // Skip drawing if not visible (performance optimization)
        if (!isVisibleRef.current) {
          animationIdRef.current = requestAnimationFrame(animate);
          return;
        }

        // Clear canvas for fresh frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update global time
        timeRef.current = Date.now() * 0.001;

        // Update floating triangles positions
        const rect = canvas.getBoundingClientRect();
        floatingTrianglesRef.current = updateFloatingTriangles(
          floatingTrianglesRef.current,
          rect.width,
          rect.height
        );

        // Update user-created triangles positions and opacity
        trianglesRef.current = updateUserTriangles(
          trianglesRef.current,
          rect.width,
          rect.height,
          Date.now()
        );

        // Add hint pulses every 3 seconds until first click (only on mouse devices)
        const now = Date.now();
        if (!isTouchDeviceRef.current && !hasUserClickedRef.current && now >= nextPulseTimeRef.current) {
          // Create pulse at current cursor position (larger than user clicks)
          const hintRipple: ClickRipple = {
            x: mouseRef.current.x,
            y: mouseRef.current.y,
            createdAt: now,
            color: nextColorRef.current,
            isHint: true // Mark as hint pulse for larger radius
          };
          clickRipplesRef.current = [...clickRipplesRef.current, hintRipple];

          // Schedule next pulse in 3 seconds
          nextPulseTimeRef.current = now + 3000;
        }

        // Clean up expired click ripples (older than 300ms)
        clickRipplesRef.current = clickRipplesRef.current.filter(
          ripple => (now - ripple.createdAt) < 300
        );

        /**
         * CURRENT INTERACTION: Mouse Follow
         * 
         * Renders floating triangles, crosshair lines (if mouse device),
         * progressive triangle drawing (mouse) or tap triangles (touch),
         * click ripples, and completed drifting triangles.
         */
        drawMouseFollow(
          ctx,
          timeRef.current,
          mouseRef.current,
          centerRef.current,
          trianglePointsRef.current,
          trianglesRef.current,
          nextColorRef.current,
          floatingTrianglesRef.current,
          isTouchDeviceRef.current,
          clickRipplesRef.current
        );

        // Schedule next frame
        animationIdRef.current = requestAnimationFrame(animate);
      };

      // Start the animation loop
      animate();

      // Add event listeners
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('click', handleClick);

      /**
       * Performance Optimization: Intersection Observer
       * 
       * Pauses animation when canvas is out of viewport to save battery/CPU.
       * This is especially important for background animations.
       */
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisibleRef.current = entry.isIntersecting;
          });
        },
        { threshold: 0.1 } // Trigger when 10% visible
      );

      if (canvasRef.current) {
        observer.observe(canvasRef.current);
      }

      /**
       * Cleanup Function
       * 
       * React calls this when component unmounts or dependencies change.
       * We must clean up to prevent memory leaks:
       * - Cancel animation frame
       * - Remove event listeners
       * - Disconnect intersection observer
       */
      return () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }

        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('click', handleClick);

        // Capture canvas reference to avoid stale closure warning
        const currentCanvas = canvas;
        if (currentCanvas) {
          observer.unobserve(currentCanvas);
        }
      };
    } catch (error) {
      console.error('Canvas initialization error:', error);
    }
  }, []); // Empty dependency array = run once on mount

  /**
   * Component Render
   * 
   * Returns a positioned canvas that breaks out to full viewport width
   * while maintaining the hero section's height.
   * 
   * Key CSS properties:
   * - absolute: Positioned relative to hero section
   * - left: 50% + transform: translateX(-50%): Centers horizontally
   * - width: 100vw: Full viewport width
   * - height: 100%: Inherits hero section height
   * - pointer-events-none: Clicks pass through to content
   * - z-index: -1: Sits behind other elements
   */
  return (
    <div
      className={`absolute top-0 left-1/2 w-screen h-full pointer-events-none ${className}`}
      style={{
        zIndex: -1,
        transform: 'translateX(-50%)'
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}