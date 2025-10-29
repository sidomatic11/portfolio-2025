/**
 * Mouse Follow Interaction
 * 
 * Crosshair axes that follow your mouse cursor in real-time.
 * Features: 
 * - Brand colors: vertical (yellow) and horizontal (orange) lines intersecting at mouse position
 * - Floating triangles: 30 animated triangles drifting like asteroids with rotation
 * - Progressive triangle drawing: 
 *   - 1st click: Point placed, line follows cursor
 *   - 2nd click: Second point fixed, triangle preview follows cursor
 *   - 3rd click: Triangle completed and filled with alternating colors
 */

export interface FloatingTriangle {
  x: number;
  y: number;
  vertices: { x: number; y: number }[]; // 3 vertices relative to center
  rotation: number;
  rotationSpeed: number;
  velocityX: number;
  velocityY: number;
  color: string;
  opacity: number;
}

export interface UserTriangle {
  x: number;
  y: number;
  vertices: { x: number; y: number }[]; // 3 vertices relative to center
  rotation: number;
  rotationSpeed: number;
  velocityX: number; // Used for floating oscillation parameters
  velocityY: number; // Used for floating oscillation parameters
  color: string;
  opacity: number;
  targetOpacity: number;
  createdAt: number; // timestamp when triangle was created
  originalX: number; // Original position for in-place floating
  originalY: number; // Original position for in-place floating
}

export interface ClickRipple {
  x: number;
  y: number;
  createdAt: number;
  color: string;
  isHint?: boolean; // If true, this is a hint pulse (larger)
}

export const drawMouseFollow = (
  ctx: CanvasRenderingContext2D, 
  time: number, 
  mouse: { x: number; y: number }, 
  center: { x: number; y: number },
  points: { x: number; y: number }[] = [],
  triangles: UserTriangle[] = [],
  nextColor: string = '#FFA348',
  floatingTriangles: FloatingTriangle[] = [],
  isTouchDevice: boolean = false,
  clickRipples: ClickRipple[] = []
) => {
  // Get canvas position and dimensions
  const rect = ctx.canvas.getBoundingClientRect();
  const canvasWidth = rect.width;
  const canvasHeight = rect.height;
  
  // Convert document coordinates to canvas-relative coordinates
  // mouse.x/y are pageX/pageY (document coordinates), so we subtract the canvas's
  // position in the document (rect.left + window.scrollX, rect.top + window.scrollY)
  const canvasX = mouse.x - (rect.left + window.scrollX);
  const canvasY = mouse.y - (rect.top + window.scrollY);

  // Draw floating triangles (background layer)
  // Floating triangles use canvas-relative coordinates, so use them directly
  floatingTriangles.forEach((triangle) => {
    ctx.save();
    ctx.translate(triangle.x, triangle.y);
    ctx.rotate(triangle.rotation);
    
    // Draw triangle with custom vertices
    ctx.beginPath();
    ctx.moveTo(triangle.vertices[0].x, triangle.vertices[0].y);
    ctx.lineTo(triangle.vertices[1].x, triangle.vertices[1].y);
    ctx.lineTo(triangle.vertices[2].x, triangle.vertices[2].y);
    ctx.closePath();
    
    // Convert hex to rgba with opacity
    const r = parseInt(triangle.color.slice(1, 3), 16);
    const g = parseInt(triangle.color.slice(3, 5), 16);
    const b = parseInt(triangle.color.slice(5, 7), 16);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${triangle.opacity})`;
    ctx.fill();
    
    ctx.restore();
  });

  // Draw user-created triangles (drifting, behind crosshairs)
  triangles.forEach((triangle) => {
    // Convert document coordinates to canvas-relative coordinates
    const tx = triangle.x - (rect.left + window.scrollX);
    const ty = triangle.y - (rect.top + window.scrollY);
    
    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(triangle.rotation);
    
    // Draw triangle with custom vertices
    ctx.beginPath();
    ctx.moveTo(triangle.vertices[0].x, triangle.vertices[0].y);
    ctx.lineTo(triangle.vertices[1].x, triangle.vertices[1].y);
    ctx.lineTo(triangle.vertices[2].x, triangle.vertices[2].y);
    ctx.closePath();
    
    // Convert hex to rgba with opacity
    const r = parseInt(triangle.color.slice(1, 3), 16);
    const g = parseInt(triangle.color.slice(3, 5), 16);
    const b = parseInt(triangle.color.slice(5, 7), 16);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${triangle.opacity})`;
    ctx.fill();
    
    ctx.restore();
  });

  // Draw progressive triangle construction
  if (points.length > 0) {
    // Draw preview lines/triangle
    if (points.length === 1) {
      // 1st point clicked: Draw line from point to cursor
      const p1x = points[0].x - (rect.left + window.scrollX);
      const p1y = points[0].y - (rect.top + window.scrollY);
      
      ctx.beginPath();
      ctx.moveTo(p1x, p1y);
      ctx.lineTo(canvasX, canvasY);
      ctx.strokeStyle = nextColor;
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (points.length === 2) {
      // 2nd point clicked: Draw fixed line + preview triangle
      const p1x = points[0].x - (rect.left + window.scrollX);
      const p1y = points[0].y - (rect.top + window.scrollY);
      const p2x = points[1].x - (rect.left + window.scrollX);
      const p2y = points[1].y - (rect.top + window.scrollY);
      
      // Draw the triangle preview (not filled, just stroked)
      ctx.beginPath();
      ctx.moveTo(p1x, p1y);
      ctx.lineTo(p2x, p2y);
      ctx.lineTo(canvasX, canvasY);
      ctx.closePath();
      ctx.strokeStyle = nextColor;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Optional: Add semi-transparent fill for preview
      ctx.fillStyle = nextColor + '33'; // Add 33 for ~20% opacity
      ctx.fill();
    }
  }

  // Draw click ripples
  const currentTime = Date.now();
  const rippleDuration = 300; // 300ms animation
  clickRipples.forEach((ripple) => {
    const elapsed = currentTime - ripple.createdAt;
    if (elapsed < rippleDuration) {
      // Calculate progress (0 to 1)
      const progress = elapsed / rippleDuration;
      
      // Radius grows - hint pulses are larger, user clicks are smaller (1 to 12px)
      const maxRadius = ripple.isHint ? 40 : 11;
      const radius = 1 + (progress * maxRadius);
      
      // Opacity fades from 1 to 0
      const opacity = 1 - progress;
      
      // Convert document coordinates to canvas-relative coordinates
      const rippleX = ripple.x - (rect.left + window.scrollX);
      const rippleY = ripple.y - (rect.top + window.scrollY);
      
      // Draw ripple circle
      ctx.beginPath();
      ctx.arc(rippleX, rippleY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = ripple.color;
      ctx.lineWidth = ripple.isHint ? 3.5 : 2;
      ctx.globalAlpha = opacity;
      ctx.stroke();
      ctx.globalAlpha = 1; // Reset alpha
    }
  });

  // Draw crosshairs (only on mouse devices, not on touch)
  if (!isTouchDevice) {
    // Draw vertical line (yellow #FFDA46)
    ctx.beginPath();
    ctx.moveTo(canvasX, 0);
    ctx.lineTo(canvasX, canvasHeight);
    ctx.strokeStyle = '#FFDA46';
    ctx.lineWidth = 1.25;
    ctx.stroke();

    // Draw horizontal line (orange #FFA348)
    ctx.beginPath();
    ctx.moveTo(0, canvasY);
    ctx.lineTo(canvasWidth, canvasY);
    ctx.strokeStyle = '#FFA348';
    ctx.lineWidth = 1.25;
    ctx.stroke();
  }
};

/**
 * Initialize floating triangles
 * Creates 30 triangles with random properties
 * Note: Positions are stored in canvas-relative coordinates (0 to canvasWidth/Height)
 */
export const createFloatingTriangles = (canvasWidth: number, canvasHeight: number): FloatingTriangle[] => {
  const triangles: FloatingTriangle[] = [];
  const colors = ['#FFA348', '#FFDA46'];
  
  for (let i = 0; i < 30; i++) {
    // Start with equilateral triangle, then add small random variations
    const baseSize = 20 + Math.random() * 80; // 20-100px base scale
    const height = (baseSize * Math.sqrt(3)) / 2;
    const variation = 0.25; // 25% max variation from equilateral
    
    // Base equilateral triangle vertices
    const baseVertices = [
      { x: 0, y: -height / 1.5 },           // top
      { x: -baseSize / 2, y: height / 3 },  // bottom left
      { x: baseSize / 2, y: height / 3 }    // bottom right
    ];
    
    // Add random variation to each vertex
    const vertices = baseVertices.map(v => ({
      x: v.x + (Math.random() - 0.5) * baseSize * variation,
      y: v.y + (Math.random() - 0.5) * baseSize * variation
    }));
    
    triangles.push({
      // Store positions in canvas-relative coordinates
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      vertices: vertices,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01, // Slow rotation
      velocityX: (Math.random() - 0.5) * 0.5, // Slow drift -0.25 to 0.25
      velocityY: (Math.random() - 0.5) * 0.5,
      color: colors[i % 2],
      opacity: 0.5 + Math.random() * 0.5 // 0.5 to 1.0
    });
  }
  
  return triangles;
};

/**
 * Update floating triangles positions and rotation
 * Note: Positions are in canvas-relative coordinates
 */
export const updateFloatingTriangles = (
  triangles: FloatingTriangle[],
  canvasWidth: number,
  canvasHeight: number
): FloatingTriangle[] => {
  return triangles.map(triangle => {
    let newX = triangle.x + triangle.velocityX;
    let newY = triangle.y + triangle.velocityY;
    
    // Wrap around canvas edges (asteroid behavior)
    if (newX < -100) newX = canvasWidth + 100;
    if (newX > canvasWidth + 100) newX = -100;
    if (newY < -100) newY = canvasHeight + 100;
    if (newY > canvasHeight + 100) newY = -100;
    
    return {
      ...triangle,
      x: newX,
      y: newY,
      rotation: triangle.rotation + triangle.rotationSpeed
    };
  });
};

/**
 * Update user-created triangles (position, rotation, and opacity fade)
 * Note: User triangles are in document coordinates (from pageX/pageY clicks)
 * Triangles float in place with gentle oscillation around their original position
 */
export const updateUserTriangles = (
  triangles: UserTriangle[],
  canvasWidth: number,
  canvasHeight: number,
  currentTime: number
): UserTriangle[] => {
  return triangles.map(triangle => {
    // Calculate time-based oscillation for subtle floating in place
    // Use createdAt for phase offset so each triangle floats at different rates
    const timeSinceCreation = (currentTime - triangle.createdAt) * 0.001; // Convert to seconds
    const horizontalPhase = triangle.createdAt * 0.001; // Unique phase per triangle
    const verticalPhase = triangle.createdAt * 0.001 + Math.PI / 2; // Offset by 90° for circular motion
    
    // Very subtle sine wave oscillation (tiny amplitude, very slow frequency)
    const oscillationRadius = 2; // Maximum 2px displacement from center
    const frequency = 0.15; // Very slow oscillation (0.15 cycles per second)
    
    const offsetX = Math.sin(timeSinceCreation * frequency * 2 * Math.PI + horizontalPhase) * oscillationRadius;
    const offsetY = Math.cos(timeSinceCreation * frequency * 2 * Math.PI + verticalPhase) * oscillationRadius;
    
    // Position oscillates around original position
    const newX = triangle.originalX + offsetX;
    const newY = triangle.originalY + offsetY;
    
    // Calculate opacity fade over 5 seconds
    const elapsedTime = currentTime - triangle.createdAt;
    const fadeDuration = 5000; // 5 seconds in milliseconds
    let newOpacity = triangle.opacity;
    
    if (elapsedTime < fadeDuration) {
      // Interpolate from 1.0 to targetOpacity over 5 seconds
      const progress = elapsedTime / fadeDuration;
      newOpacity = 1.0 + (triangle.targetOpacity - 1.0) * progress;
    } else {
      // After 5 seconds, lock to target opacity
      newOpacity = triangle.targetOpacity;
    }
    
    return {
      ...triangle,
      x: newX,
      y: newY,
      rotation: triangle.rotation, // Keep rotation constant, no rotation
      opacity: newOpacity
    };
  });
};

/**
 * Convert user-clicked points to a drifting triangle
 */
export const createUserTriangle = (
  clickedPoints: { x: number; y: number }[],
  color: string
): UserTriangle => {
  // Calculate center of the triangle
  const centerX = (clickedPoints[0].x + clickedPoints[1].x + clickedPoints[2].x) / 3;
  const centerY = (clickedPoints[0].y + clickedPoints[1].y + clickedPoints[2].y) / 3;
  
  // Convert vertices to be relative to center
  const relativeVertices = clickedPoints.map(point => ({
    x: point.x - centerX,
    y: point.y - centerY
  }));
  
  return {
    x: centerX,
    y: centerY,
    vertices: relativeVertices,
    rotation: 0,
    rotationSpeed: (Math.random() - 0.5) * 0.01, // Slow rotation like floating triangles
    velocityX: (Math.random() - 0.5) * 0.5, // Kept for backwards compatibility, now used for oscillation phase
    velocityY: (Math.random() - 0.5) * 0.5, // Kept for backwards compatibility, now used for oscillation phase
    color: color,
    opacity: 1.0, // Start fully opaque
    targetOpacity: 0.5 + Math.random() * 0.4, // Random target between 0.5 and 0.9
    createdAt: Date.now(), // Timestamp for fade calculation and oscillation phase
    originalX: centerX, // Store original position for in-place floating
    originalY: centerY // Store original position for in-place floating
  };
};
