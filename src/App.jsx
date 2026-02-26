import React from 'react';
import { useBarbie } from './context/BarbieContext';
import { useHangmanGame } from './hooks/useHangmanGame';
// Placeholder imports - will implement next
import WardrobePanel from './components/WardrobePanel';
// import BarbieImage from './components/BarbieImage'; // Replaced by BarbieStage
import BarbieStage from './components/BarbieStage';
import GameControls from './components/GameControls';
import SparkleCursor from './components/SparkleCursor';
import BarbieSelectionScreen from './components/screens/BarbieSelectionScreen';
// import WardrobeClosetView from './components/WardrobeClosetView';
import FloatingSparkles from './components/FloatingSparkles';

const App = () => {
  const { hasSetupFinished } = useBarbie();
  const gameHook = useHangmanGame();

  return (
    <div className="app-container">
      <SparkleCursor />
      <FloatingSparkles />

      {!hasSetupFinished ? (
        <BarbieSelectionScreen />
      ) : (
        <div className="main-screen">
          <div className="game-stage-container">
            {/* The barbie is now in the center, wardrobe doors removed */}
            <div className="barbie-stage-area" style={{ flex: 1 }}>
              <BarbieStage gameStatus={gameHook.gameStatus} />
            </div>
          </div>

          <div className="keyboard-controls-area">
            <GameControls {...gameHook} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
