import React, { useEffect, useRef } from 'react';

const WorldMapBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Polygones des continents (coordonnées normalisées 0-1)
    const continentPolygons = [
      // Amérique du Nord
      [
        [0.05, 0.28], [0.07, 0.22], [0.08, 0.18], [0.10, 0.16], [0.12, 0.15],
        [0.15, 0.15], [0.18, 0.16], [0.20, 0.18], [0.22, 0.20], [0.23, 0.23],
        [0.24, 0.27], [0.25, 0.31], [0.24, 0.35], [0.23, 0.38], [0.21, 0.40],
        [0.19, 0.42], [0.17, 0.44], [0.16, 0.45], [0.14, 0.46], [0.13, 0.44],
        [0.11, 0.42], [0.09, 0.39], [0.07, 0.36], [0.06, 0.32]
      ],
      
      // Amérique du Sud
      [
        [0.17, 0.46], [0.19, 0.44], [0.21, 0.44], [0.23, 0.46], [0.24, 0.49],
        [0.25, 0.53], [0.25, 0.58], [0.24, 0.62], [0.23, 0.66], [0.22, 0.69],
        [0.20, 0.72], [0.18, 0.74], [0.17, 0.73], [0.16, 0.70], [0.15, 0.66],
        [0.15, 0.62], [0.15, 0.58], [0.15, 0.54], [0.15, 0.50], [0.16, 0.47]
      ],
      
      // Groenland
      [
        [0.30, 0.12], [0.33, 0.10], [0.36, 0.11], [0.38, 0.14], [0.38, 0.18],
        [0.37, 0.22], [0.35, 0.24], [0.32, 0.25], [0.30, 0.23], [0.29, 0.19],
        [0.29, 0.15]
      ],
      
      // Europe
      [
        [0.42, 0.24], [0.43, 0.22], [0.45, 0.20], [0.47, 0.18], [0.49, 0.17],
        [0.51, 0.16], [0.53, 0.17], [0.55, 0.19], [0.57, 0.21], [0.58, 0.24],
        [0.58, 0.27], [0.57, 0.30], [0.55, 0.32], [0.53, 0.33], [0.51, 0.33],
        [0.49, 0.32], [0.47, 0.31], [0.45, 0.29], [0.43, 0.27], [0.42, 0.25]
      ],
      
      // Afrique
      [
        [0.48, 0.33], [0.50, 0.31], [0.52, 0.30], [0.55, 0.31], [0.57, 0.33],
        [0.59, 0.36], [0.60, 0.40], [0.60, 0.44], [0.59, 0.48], [0.58, 0.52],
        [0.57, 0.56], [0.56, 0.59], [0.54, 0.62], [0.52, 0.64], [0.50, 0.65],
        [0.48, 0.64], [0.47, 0.61], [0.46, 0.57], [0.46, 0.53], [0.46, 0.49],
        [0.46, 0.45], [0.46, 0.41], [0.46, 0.37], [0.47, 0.34]
      ],
      
      // Asie (grande masse)
      [
        [0.56, 0.22], [0.58, 0.20], [0.60, 0.18], [0.63, 0.16], [0.66, 0.15],
        [0.69, 0.14], [0.72, 0.14], [0.75, 0.15], [0.78, 0.17], [0.81, 0.19],
        [0.83, 0.22], [0.85, 0.25], [0.86, 0.28], [0.86, 0.32], [0.85, 0.35],
        [0.84, 0.38], [0.82, 0.41], [0.80, 0.44], [0.78, 0.46], [0.76, 0.48],
        [0.74, 0.49], [0.72, 0.49], [0.70, 0.48], [0.68, 0.46], [0.66, 0.44],
        [0.64, 0.42], [0.62, 0.39], [0.60, 0.36], [0.59, 0.33], [0.58, 0.30],
        [0.57, 0.27], [0.56, 0.24]
      ],
      
      // Inde
      [
        [0.64, 0.36], [0.66, 0.35], [0.68, 0.36], [0.70, 0.38], [0.71, 0.41],
        [0.70, 0.44], [0.68, 0.46], [0.66, 0.47], [0.64, 0.46], [0.63, 0.44],
        [0.62, 0.41], [0.63, 0.38]
      ],
      
      // Asie du Sud-Est
      [
        [0.72, 0.43], [0.74, 0.42], [0.76, 0.43], [0.78, 0.45], [0.79, 0.48],
        [0.78, 0.51], [0.76, 0.53], [0.74, 0.54], [0.72, 0.53], [0.71, 0.51],
        [0.71, 0.48], [0.71, 0.45]
      ],
      
      // Japon
      [
        [0.85, 0.31], [0.86, 0.30], [0.87, 0.31], [0.88, 0.33], [0.88, 0.36],
        [0.87, 0.38], [0.86, 0.39], [0.85, 0.38], [0.84, 0.36], [0.84, 0.33]
      ],
      
      // Australie
      [
        [0.77, 0.59], [0.80, 0.58], [0.83, 0.59], [0.86, 0.61], [0.88, 0.63],
        [0.89, 0.66], [0.88, 0.69], [0.86, 0.71], [0.83, 0.73], [0.80, 0.74],
        [0.77, 0.73], [0.75, 0.71], [0.74, 0.68], [0.74, 0.65], [0.75, 0.62],
        [0.76, 0.60]
      ],
      
      // Nouvelle-Zélande (île du Nord)
      [
        [0.91, 0.70], [0.92, 0.69], [0.93, 0.70], [0.93, 0.72], [0.92, 0.73],
        [0.91, 0.73], [0.90, 0.72], [0.90, 0.71]
      ],
      
      // Nouvelle-Zélande (île du Sud)
      [
        [0.90, 0.75], [0.91, 0.74], [0.92, 0.75], [0.93, 0.77], [0.92, 0.79],
        [0.91, 0.80], [0.90, 0.79], [0.89, 0.77], [0.89, 0.76]
      ]
    ];

    // Fonction pour vérifier si un point est dans un polygone (ray casting)
    const isPointInPolygon = (x, y, polygon) => {
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i][0], yi = polygon[i][1];
        const xj = polygon[j][0], yj = polygon[j][1];
        
        const intersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    };

    const isInContinent = (nx, ny) => {
      return continentPolygons.some(polygon => isPointInPolygon(nx, ny, polygon));
    };

    // Créer les points (densité augmentée)
    const points = [];
    const step = 10;
    
    for (let x = 0; x < canvas.width; x += step) {
      for (let y = 0; y < canvas.height; y += step) {
        if (isInContinent(x / canvas.width, y / canvas.height)) {
          if (Math.random() > 0.2) {
            points.push({
              x, y,
              baseX: x, baseY: y,
              vx: (Math.random() - 0.5) * 0.2,
              vy: (Math.random() - 0.5) * 0.2,
              phase: Math.random() * Math.PI * 2,
              size: Math.random() * 1.2 + 0.8
            });
          }
        }
      }
    }

    let frame = 0;

    const draw = () => {
      // Fond
      ctx.fillStyle = 'rgba(15, 23, 42, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      frame += 0.01;

      // Dessiner points
      points.forEach(p => {
        const pulse = Math.sin(frame + p.phase) * 0.35 + 1;
        const sz = p.size * pulse;
        
        p.x += p.vx;
        p.y += p.vy;
        
        p.vx += (p.baseX - p.x) * 0.003;
        p.vy += (p.baseY - p.y) * 0.003;
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Point
        ctx.beginPath();
        ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(71, 85, 105, ${0.75 + pulse * 0.15})`;
        ctx.fill();
        
        // Halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, sz * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(51, 65, 85, ${0.1 * pulse})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#0f172a',
        display: 'block'
      }}
    />
  );
};

export default WorldMapBackground;