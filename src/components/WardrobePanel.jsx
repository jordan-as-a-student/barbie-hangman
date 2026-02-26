import React from 'react';
import { useBarbie } from '../context/BarbieContext';

const WardrobePanel = ({ side }) => {
    const { toggleWardrobe } = useBarbie();

    return (
        <div
            className={`wardrobe-panel ${side}`}
            onClick={toggleWardrobe}
            style={{
                width: '20%',
                height: '80%', // Make it look a bit shorter than full screen so it fits nice 
                background: 'linear-gradient(to right, #f8cce8, #eab0d9, #eab0d9, #f8cce8)', // 3D wood curve effect
                border: '4px solid #fff', // Door frame
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.3)', // Shadow into room
                display: 'flex',
                justifyContent: side === 'left' ? 'flex-end' : 'flex-start', // handles toward middle
                alignItems: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontFamily: 'var(--font-script)',
                fontSize: '1.5rem',
                transform: 'perspective(500px) rotateY(0deg)',
                transition: 'transform 0.3s ease',
            }}
        >
            {side === 'right' && (
                <div style={{
                    width: '15px',
                    height: '80px',
                    background: 'linear-gradient(to top, #FFD700, #FFF8DC, #FFD700)',
                    borderRadius: '8px',
                    margin: '0 15px',
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.4)',
                    flexShrink: 0
                }}></div>
            )}

            <div className="door-text" style={{ padding: '0 10px', color: '#D20078', fontWeight: 'bold' }}>
                Open Closet
            </div>

            {side === 'left' && (
                <div style={{
                    width: '15px',
                    height: '80px',
                    background: 'linear-gradient(to top, #FFD700, #FFF8DC, #FFD700)',
                    borderRadius: '8px',
                    margin: '0 15px',
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.4)',
                    flexShrink: 0
                }}></div>
            )}
        </div>
    );
};

export default WardrobePanel;
