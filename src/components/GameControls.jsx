import React from 'react';
import WordBlanks from './WordBlanks';
import Keyboard from './Keyboard';
import LivesCounter from './LivesCounter';
import WrongLetters from './WrongLetters';
import Confetti from './Confetti';

const GameControls = ({ word, guessedLetters, wrongGuesses, maxLives, guessLetter, gameStatus, startNewGame }) => {
    const isGameOver = gameStatus !== 'playing';

    return (
        <div className="game-controls" style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
        }}>
            {gameStatus === 'won' && <Confetti />}

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
                    animation: 'float 2s infinite ease-in-out'
                }}>
                    <h2 style={{
                        color: gameStatus === 'won' ? '#FF1493' : '#E0218A',
                        fontSize: '2rem',
                        textShadow: '0 0 10px #FFF'
                    }}>
                        {gameStatus === 'won' ? '✨ YOU SAVED BARBIE! ✨' : '💔 OH NO! BARBIE NEEDS YOU! 💔'}
                    </h2>
                    <button
                        onClick={startNewGame}
                        style={{
                            marginTop: '10px',
                            padding: '10px 25px',
                            borderRadius: '25px',
                            background: '#FF1493',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)',
                            transition: 'transform 0.2s'
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
