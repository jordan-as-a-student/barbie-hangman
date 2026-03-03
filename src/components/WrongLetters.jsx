import React from 'react';

const WrongLetters = ({ guessedLetters, word }) => {
    // Filter guessed letters that are NOT in the word
    const wrongLetters = Array.from(guessedLetters).filter(
        letter => !word.includes(letter)
    );

    if (wrongLetters.length === 0) return null;

    return (
        <div className="wrong-letters" style={{
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            color: '#FF69B4',
            fontWeight: 'bold'
        }}>
            <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-ui)' }}>Misses:</span>
            {wrongLetters.map((letter, i) => (
                <span key={i} style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-ui)',
                    textDecoration: 'line-through',
                    opacity: 0.7
                }}>
                    {letter}
                </span>
            ))}
        </div>
    );
};
export default WrongLetters;
