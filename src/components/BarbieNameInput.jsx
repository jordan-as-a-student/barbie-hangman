import React, { useState } from 'react';
import { useBarbie } from '../context/BarbieContext';

const BarbieNameInput = () => {
    const [name, setName] = useState("My Barbie");

    return (
        <div style={{ position: 'absolute', top: '-10%', width: '100%', textAlign: 'center' }}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '2px solid #FF1493',
                    textAlign: 'center',
                    fontFamily: 'var(--font-script)',
                    fontSize: '2.5rem',
                    color: '#FF1493',
                    outline: 'none',
                    width: '80%',
                    textShadow: '0 0 5px rgba(255,255,255,0.8)'
                }}
            />
        </div>
    )
}
export default BarbieNameInput;
