import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Square from "./Components/Square"
import { Patterns } from "./Patterns"






function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner: "none", state: "none"});

  
  useEffect(() => {
    checkIfTie();
    checkWin();
    if (player === "X") {
      setPlayer("O");
    }
    else {
      setPlayer("X");
    }
  }, [board])
  

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game finished! Winner is ${result.winner}`);
      restartGame();
    }
    
  }, [result])
  
  const chooseSquare = (squareToChange) => {
    setBoard(board.map((val, index) => {
      if (index === squareToChange && val === "") {
        return player;
      }
      return val;
    })
    );



  };

  const checkWin = () => {
    Patterns.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      pattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false;
        }
      })
      if (foundWinningPattern){
        setResult({winner: player, state: "Won"})
      }
    });
  };

    const checkIfTie = () => {
      let filled = true;
      board.forEach((square) => {
        if (square === "") {
          filled = false;
        }
      }) 

      if (filled) {
        setResult({winner: "No one", state: "Tie"})
      };
    };

    const restartGame = () => {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setPlayer("O");
    }

  return (
    <div className='App'>
      <div className='board'>
        <div className='row'>
          <Square value={board[0]} chooseSquare={() => { chooseSquare(0) }} />
          <Square value={board[1]} chooseSquare={() => { chooseSquare(1) }} />
          <Square value={board[2]} chooseSquare={() => { chooseSquare(2) }} />
        </div>
        <div className='row'>
          <Square value={board[3]} chooseSquare={() => { chooseSquare(3) }} />
          <Square value={board[4]} chooseSquare={() => { chooseSquare(4) }} />
          <Square value={board[5]} chooseSquare={() => { chooseSquare(5) }} />
        </div>
        <div className='row'>
          <Square value={board[6]} chooseSquare={() => { chooseSquare(6) }} />
          <Square value={board[7]} chooseSquare={() => { chooseSquare(7) }} />
          <Square value={board[8]} chooseSquare={() => { chooseSquare(8) }} />
        </div>
      </div>
    </div>

  );
}

export default App;
