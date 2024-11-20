// src/App.js
import React, { useState } from 'react';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import Settings from './components/Settings';
import useGameLogic from './hooks/useGameLogic';
import './styles.css';

function App() {
    const [isVsComputer, setIsVsComputer] = useState(false);
    const { squares, isXNext, xScore, oScore, gameStatus, handleSquareClick, resetGame, nextRound } = useGameLogic(isVsComputer);

    const handleModeChange = (mode) => {
        setIsVsComputer(mode === 'computer');
        resetGame();
    };

    return (
        <div className="app">
            <h1>Jogo da Velha</h1>
            <ScoreBoard xScore={xScore} oScore={oScore} currentTurn={isXNext ? 'X' : 'O'} />
            <Board squares={squares} onSquareClick={handleSquareClick} />
            
            {gameStatus && (
                <div className="winner-message">
                    {gameStatus === 'Draw' ? 'Empate!' : `${gameStatus}`}
                </div>
            )}

            {/* Botões de configuração para "Reiniciar Jogo" e "Próxima Rodada" */}
            <div className="settings-buttons">
                <button onClick={resetGame}>Reiniciar Jogo</button>
                <button onClick={nextRound}>Próxima Rodada</button>
            </div>

            {/* Botões para selecionar o modo de jogo */}
            <div className="mode-select">
                <button onClick={() => handleModeChange('friend')}>Jogar contra um Amigo</button>
                <button onClick={() => handleModeChange('computer')}>Jogar contra a Máquina</button>
            </div>
        </div>
    );
}

export default App;
