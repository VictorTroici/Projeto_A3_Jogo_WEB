// src/components/ScoreBoard.js
import React from 'react';

function ScoreBoard({ xScore, oScore, currentTurn }) {
    return (
        <div className="score-board">
            <h2>Placar</h2>
            <p>X: {xScore} | O: {oScore}</p>
            <p>Vez de: {currentTurn}</p>
        </div>
    );
}

export default ScoreBoard;
