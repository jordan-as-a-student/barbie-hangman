import React from 'react';

const LivesCounter = ({ maxLives, wrongGuesses }) => {
    const livesLeft = maxLives - wrongGuesses;

    return (
        <div className="lives-counter" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px', alignItems: 'center' }}>
            {/* Display Barbie Heads */}
            {Array.from({ length: maxLives }).map((_, i) => {
                const isLost = i < wrongGuesses;
                return (
                    <div key={i} style={{
                        width: '45px',
                        height: '45px',
                        opacity: isLost ? 0.3 : 1,
                        filter: isLost ? 'grayscale(100%)' : 'none',
                        backgroundImage: 'url("/images/barbie-head.png")',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        transition: 'all 0.3s'
                    }}>
                    </div>
                );
            })}
            <div style={{
                color: '#FFF',
                fontSize: '2.2rem',
                marginLeft: '15px',
                fontFamily: 'var(--font-script)',
                textShadow: '2px 2px 4px rgba(255,20,147,0.5)'
            }}>
                {livesLeft} Lives Left
            </div>
        </div>
    );
};
export default LivesCounter;
