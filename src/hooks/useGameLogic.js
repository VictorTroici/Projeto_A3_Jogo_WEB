// src/hooks/useGameLogic.js
import { useState, useEffect } from 'react';

function useGameLogic(isVsComputer) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true); // X é o jogador humano, O é a máquina
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const [gameStatus, setGameStatus] = useState(null); // "win", "draw", or null for ongoing game

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const checkDraw = (squares) => {
        return squares.every(square => square !== null);
    };

    const handleSquareClick = (index) => {
        if (squares[index] || gameStatus) return; // Não faz nada se a célula já estiver ocupada ou se o jogo terminou.

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const computerMove = () => {
        if (isXNext) return; // Só a máquina joga quando for o turno do "O"

        const emptySquares = squares.map((sq, idx) => sq === null ? idx : null).filter(idx => idx !== null);
        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];

        if (randomIndex !== undefined) {
            const newSquares = squares.slice();
            newSquares[randomIndex] = 'O';
            setSquares(newSquares);
            setIsXNext(true); // Depois que a máquina joga, passa para o turno do jogador
        }
    };

    const checkGameStatus = (squares) => {
        const winner = calculateWinner(squares);
        if (winner) {
            return winner === 'X' ? 'X Wins' : 'O Wins';
        } else if (checkDraw(squares)) {
            return 'Draw';
        }
        return null;
    };

    useEffect(() => {
        if (isVsComputer && !isXNext && !calculateWinner(squares) && !checkDraw(squares)) {
            computerMove(); // A máquina faz a jogada assim que for o turno dela
        }
    }, [isXNext, squares, isVsComputer]);

    useEffect(() => {
        const status = checkGameStatus(squares);
        if (status) {
            setGameStatus(status);
            if (status === 'X Wins') {
                setXScore(xScore + 1);
            } else if (status === 'O Wins') {
                setOScore(oScore + 1);
            }
        }
    }, [squares]);

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setGameStatus(null);
        setXScore(0); // Zerando o placar
        setOScore(0); // Zerando o placar
    };

    const nextRound = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setGameStatus(null);
    };

    return {
        squares,
        isXNext,
        xScore,
        oScore,
        gameStatus,
        handleSquareClick,
        resetGame,
        nextRound,
    };
}

export default useGameLogic;
