import React from 'react';

const WordBlanks = ({ word, guessedLetters, revealAll = false }) => {
    return (
        <div className="word-blanks" style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            margin: '20px auto',
            flexWrap: 'wrap',
            maxWidth: '100%'
        }}>
            {word.split('').map((letter, index) => {
                const isRevealed = guessedLetters.has(letter) || revealAll;
                return (
                    <div key={index} style={{
                        width: 'var(--word-w)',
                        height: 'var(--word-h)',
                        background: isRevealed ? '#fff' : 'rgba(255, 255, 255, 0.4)',
                        borderBottom: isRevealed ? 'none' : '5px solid #FF1493',
                        boxShadow: isRevealed ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-ui)', // Cleaner readable font
                        fontSize: 'var(--word-font)',
                        fontWeight: '900',
                        color: '#E0218A',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s'
                    }}>
                        {isRevealed ? letter : ''}
                    </div>
                );
            })}
        </div>
    );
};
export default WordBlanks;
