import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // We could try to auto-play but browser policies usually block audio out of the box.
    // Instead, the user can start it by clicking the button, 
    // or we can just try setting playing=true from the very beginning. Let's start with false, 
    // and the user can click it to play music right as they land, or we start true.
    // Wait, I will use an effect to listen to click, to ensure play.

    React.useEffect(() => {
        const handleFirstInteraction = () => {
            // Start playing on first click anywhere if they haven't explicitly disabled it
            setIsPlaying(prev => {
                if (!prev) return true;
                return prev;
            });
            document.removeEventListener('click', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);
        return () => document.removeEventListener('click', handleFirstInteraction);
    }, []);

    const toggleMusic = (e) => {
        e.stopPropagation(); // Prevent the document click listener from immediately re-playing if user meant to pause
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="background-music-container">
            <button
                className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
                onClick={toggleMusic}
                aria-label="Toggle Background Music"
                title={isPlaying ? "Mute Music" : "Play Music"}
            >
                {isPlaying ? <FaMusic className="music-icon" /> : <FaVolumeMute className="music-icon" />}
            </button>


            {/* Using standard HTML5 audio element instead of YouTube to prevent browser blocking.
                I have added a placeholder royalty-free song to prove it works perfectly! */}
            <audio
                ref={(audio) => {
                    if (audio) {
                        if (isPlaying) {
                            audio.play().catch(e => console.error("Audio block:", e));
                        } else {
                            audio.pause();
                        }
                    }
                }}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                loop
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default BackgroundMusic;
