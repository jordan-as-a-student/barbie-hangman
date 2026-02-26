import React from 'react';

const Confetti = () => {
    const pieces = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        delay: Math.random() * 0.5 + 's',
        duration: Math.random() * 2 + 2 + 's',
        color: ['#FF1493', '#FF69B4', '#FFD700', '#00FFFF', '#FF00FF'][Math.floor(Math.random() * 5)]
    }));

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            {pieces.map(p => (
                <div key={p.id} style={{
                    position: 'absolute',
                    left: p.left,
                    top: '-20px',
                    width: '10px',
                    height: '20px',
                    background: p.color,
                    opacity: 1,
                    animation: `confetti-fall ${p.duration} linear infinite ${p.delay}`
                }} />
            ))}
            <style>{`
            @keyframes confetti-fall {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
            }
          `}</style>
        </div>
    )
}
export default Confetti;
