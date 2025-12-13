import { useEffect, useRef, useCallback } from 'react';

let TEAL   = { r: 0,   g: 173, b: 181 };
let PINK   = { r: 255, g: 45,  b: 120 };

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp(v: number, min: number, max: number) { return Math.min(max, Math.max(min, v)); }
function dist(ax: number, ay: number, bx: number, by: number) {
  return Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
}

interface Node {
  x: number; 
  y: number;
  load: number; // 0 = Teal (Idle), 1 = Pink (Cursor Proximity)
}

function makeGrid(W: number, H: number, isMobile: boolean): Node[] {
  // Slightly denser grid to compensate for the removal of connecting lines
  const cols = isMobile ? 8 : 22;
  const rows = isMobile ? 12 : 14;
  const nodes: Node[] = [];
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push({
        x: (c / (cols - 1)) * W,
        y: (r / (rows - 1)) * H,
        load: 0,
      });
    }
  }
  return nodes;
}

function nodeColor(load: number, alpha: number): string {
  const t = clamp(load, 0, 1);
  const r = Math.round(lerp(TEAL.r, PINK.r, t));
  const g = Math.round(lerp(TEAL.g, PINK.g, t));
  const b = Math.round(lerp(TEAL.b, PINK.b, t));
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const nodesRef  = useRef<Node[]>([]);
  const rafRef    = useRef<number>(0);
  const isMobileRef = useRef(false);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    isMobileRef.current = W < 640;
    nodesRef.current = makeGrid(W * dpr, H * dpr, isMobileRef.current);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // alpha: false can improve performance
    if (!ctx) return;

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const px = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const py = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      mouseRef.current = {
        x: (px - rect.left) * window.devicePixelRatio,
        y: (py - rect.top)  * window.devicePixelRatio,
      };
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });

    let lastTime = 0;
    const INFLUENCE = 180 * window.devicePixelRatio; // Blending radius

    function draw(time: number) {
      if (!ctx || !canvas) return;
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const dpr = window.devicePixelRatio || 1;
      const W = canvas.width;
      const H = canvas.height;

      // Clear with background color instead of clearRect for 'alpha: false' contexts
      ctx.fillStyle = '#050507'; // var(--obsidian-0) base
      ctx.fillRect(0, 0, W, H);

      const nodes = nodesRef.current;
      const mx    = mouseRef.current.x;
      const my    = mouseRef.current.y;

      // Single pass to update states and draw points
      nodes.forEach(n => {
        // Calculate interaction load
        const d = dist(n.x, n.y, mx, my);
        const target = d < INFLUENCE ? clamp((1 - d / INFLUENCE) * 1.5, 0, 1) : 0;
        
        // Smoothly interpolate current color state toward target
        n.load = lerp(n.load, target, 1 - Math.pow(0.015, dt));

        const radius = 4 * dpr;
        const glowRadius = radius * 3;

        // Draw soft glow
        if (n.load > 0.05) {
            const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowRadius);
            grad.addColorStop(0, nodeColor(n.load, 0.4 * n.load));
            grad.addColorStop(1, nodeColor(n.load, 0));
            ctx.beginPath();
            ctx.arc(n.x, n.y, glowRadius, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
        }

        // Draw core point
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor(n.load, 0.85);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}