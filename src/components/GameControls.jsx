import React from 'react';
import { useBarbie } from '../context/BarbieContext';
import WordBlanks from './WordBlanks';
import Keyboard from './Keyboard';
import LivesCounter from './LivesCounter';
import WrongLetters from './WrongLetters';
import Confetti from './Confetti';

const GameControls = ({ word, guessedLetters, wrongGuesses, maxLives, guessLetter, gameStatus, startNewGame, revealHint }) => {
    const isGameOver = gameStatus !== 'playing';
    const { resetSetup } = useBarbie();

    return (
        <div className="game-controls" style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        }}>
            {gameStatus === 'won' && <Confetti />}

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '5px' }}>
                <button
                    onClick={resetSetup}
                    style={{
                        padding: '12px 24px',
                        background: '#FFF',
                        color: '#FF1493',
                        border: '2px solid #FF1493',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                    Change Barbie Setup
                </button>
                {!isGameOver && (
                    <button
                        onClick={revealHint}
                        style={{
                            padding: '12px 24px',
                            background: '#FF1493',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '25px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                        }}>
                        ✨ Get Hint
                    </button>
                )}
            </div>

            <WordBlanks word={word} guessedLetters={guessedLetters} revealAll={gameStatus === 'lost'} />

            <WrongLetters guessedLetters={guessedLetters} word={word} />

            <LivesCounter maxLives={maxLives} wrongGuesses={wrongGuesses} />

            <Keyboard
                onGuess={guessLetter}
                guessedLetters={guessedLetters}
                disabled={isGameOver}
            />

            {isGameOver && (
                <div className="game-over-message" style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    animation: 'float 2s infinite ease-in-out',
                    zIndex: 10
                }}>
                    <h2 style={{
                        color: '#FFF',
                        fontFamily: 'var(--font-script)',
                        fontSize: '4rem',
                        textShadow: '3px 3px 6px rgba(255, 20, 147, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)'
                    }}>
                        {gameStatus === 'won' ? '✨ YOU SAVED BARBIE! ✨' : '💔 OH NO! BARBIE NEEDS YOU! 💔'}
                    </h2>
                    <button
                        onClick={startNewGame}
                        style={{
                            marginTop: '15px',
                            padding: '12px 30px',
                            borderRadius: '30px',
                            background: '#FF1493',
                            color: 'white',
                            fontFamily: 'var(--font-script)',
                            fontSize: '2rem',
                            border: '3px solid #FFF',
                            boxShadow: '0 8px 20px rgba(255, 20, 147, 0.6)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Play Again 💖
                    </button>
                </div>
            )}
        </div>
    )
}
export default GameControls;
