import React from 'react';

const Keyboard = ({ onGuess, guessedLetters, disabled }) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="keyboard-grid" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            maxWidth: '100%',
            margin: '10px auto',
            padding: '5px'
        }}>
            {letters.map(letter => {
                const isGuessed = guessedLetters.has(letter);
                return (
                    <button
                        key={letter}
                        onClick={() => onGuess(letter)}
                        disabled={isGuessed || disabled}
                        style={{
                            minWidth: '40px',
                            minHeight: '50px',
                            padding: '10px 15px',
                            borderRadius: '12px',
                            backgroundColor: isGuessed ? '#FFC1E3' : '#FF1493',
                            color: isGuessed ? '#FFF' : '#FFF',
                            fontFamily: 'var(--font-ui)',
                            fontSize: '1.6rem', // Larger font
                            fontWeight: '900',
                            opacity: isGuessed ? 0.5 : 1,
                            cursor: isGuessed || disabled ? 'default' : 'pointer',
                            boxShadow: isGuessed ? 'none' : '0 6px 0 #D63384, 0 8px 15px rgba(0,0,0,0.2)',
                            transform: isGuessed ? 'translateY(6px)' : 'none',
                            transition: 'all 0.1s ease',
                            border: '2px solid #FFF'
                        }}
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    );
};
export default Keyboard;
