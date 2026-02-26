import React from 'react';

const FloatingSparkles = () => {
    // Generate static random sparkles
    const sparkles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        delay: Math.random() * 5 + 's',
        duration: Math.random() * 3 + 2 + 's',
        size: Math.random() * 10 + 5 + 'px'
    }));

    return (
        <div className="floating-sparkles" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {sparkles.map(s => (
                <div key={s.id} style={{
                    position: 'absolute',
                    left: s.left,
                    top: s.top,
                    width: s.size,
                    height: s.size,
                    background: 'white',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    opacity: 0.6,
                    animation: `float-sparkle ${s.duration} infinite ease-in-out ${s.delay}`,
                    filter: 'drop-shadow(0 0 2px white)'
                }} />
            ))}
            <style>{`
                @keyframes float-sparkle {
                    0%, 100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.4; }
                    50% { transform: translateY(-20px) scale(1.2) rotate(45deg); opacity: 0.8; }
                }
            `}</style>
        </div>
    )
}
export default FloatingSparkles;
