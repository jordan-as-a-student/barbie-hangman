import React from 'react';

const LivesCounter = ({ maxLives, wrongGuesses }) => {
    const livesLeft = maxLives - wrongGuesses;

    return (
        <div className="lives-counter" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
            {/* Display lipsticks */}
            {Array.from({ length: maxLives }).map((_, i) => {
                const isLost = i < wrongGuesses;
                return (
                    <div key={i} style={{ fontSize: '2rem', opacity: isLost ? 0.3 : 1, filter: isLost ? 'grayscale(100%)' : 'none' }}>
                        💄
                    </div>
                );
            })}
            <div style={{ color: '#E0218A', fontSize: '1.2rem', marginLeft: '10px', fontFamily: 'var(--font-script)' }}>
                {livesLeft} Lives Left
            </div>
        </div>
    );
};
export default LivesCounter;
