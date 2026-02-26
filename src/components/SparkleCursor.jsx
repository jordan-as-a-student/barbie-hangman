import React, { useEffect, useState, useRef } from 'react';

const SparkleCursor = () => {
    const [sparkles, setSparkles] = useState([]);
    const sparkleId = useRef(0);

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (e) => {
            // Add a new sparkle occasionally to save perf
            if (Math.random() > 0.5) return;

            const newSparkle = {
                id: sparkleId.current++,
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 8 + 4, // 4-12px
                color: ['#FF69B4', '#FF1493', '#FFFFFF', '#FFB6C1', '#00FFFF', '#FFD700'][Math.floor(Math.random() * 6)],
                createdAt: Date.now()
            };

            setSparkles(prev => [...prev.slice(-30), newSparkle]);
        };

        // Animation loop to clean up
        const animate = () => {
            const now = Date.now();
            setSparkles(prev => prev.filter(s => now - s.createdAt < 600));
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            {sparkles.map(sparkle => (
                <div key={sparkle.id} style={{
                    position: 'absolute',
                    left: sparkle.x,
                    top: sparkle.y,
                    width: sparkle.size,
                    height: sparkle.size,
                    background: sparkle.color,
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', // Star shape
                    transform: 'translate(-50%, -50%)',
                    animation: 'cursor-fade 0.5s linear forwards',
                    boxShadow: `0 0 4px ${sparkle.color}`
                }} />
            ))}
            <style>{`
        @keyframes cursor-fade {
            0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0) rotate(180deg); opacity: 0; }
        }
      `}</style>
        </div>
    );
};
export default SparkleCursor;
