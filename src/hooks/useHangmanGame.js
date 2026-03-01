import { useState, useEffect, useCallback } from 'react';
import { wordList } from '../data/wordList';

export const useHangmanGame = () => {
    const [word, setWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const maxLives = 6;
    const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost

    const startNewGame = useCallback(() => {
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        setWord(randomWord);
        setGuessedLetters(new Set());
        setWrongGuesses(0);
        setGameStatus('playing');
    }, []);

    // Initialize game on mount
    useEffect(() => {
        startNewGame();
    }, [startNewGame]);

    const guessLetter = useCallback((letter) => {
        if (gameStatus !== 'playing' || guessedLetters.has(letter)) return;

        setGuessedLetters(prev => {
            const newSet = new Set(prev);
            newSet.add(letter);
            return newSet;
        });

        if (!word.includes(letter)) {
            setWrongGuesses(prev => {
                const newCount = prev + 1;
                if (newCount >= maxLives) {
                    setGameStatus('lost');
                }
                return newCount;
            });
        }
    }, [gameStatus, guessedLetters, word, maxLives]);

    // Check for win condition
    useEffect(() => {
        if (word && gameStatus === 'playing') {
            const isWinner = word.split('').every(char => guessedLetters.has(char));
            if (isWinner) {
                setGameStatus('won');
            }
        }
    }, [guessedLetters, word, gameStatus]);

    const revealHint = useCallback(() => {
        if (gameStatus !== 'playing' || !word) return;
        const unguessedLetters = word.split('').filter(char => !guessedLetters.has(char));
        if (unguessedLetters.length > 0) {
            const randomChar = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
            guessLetter(randomChar);
        }
    }, [word, guessedLetters, gameStatus, guessLetter]);

    return {
        word,
        guessedLetters,
        wrongGuesses,
        maxLives,
        gameStatus,
        guessLetter,
        startNewGame,
        revealHint
    };
};
