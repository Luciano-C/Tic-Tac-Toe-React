
import '../App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Square from "./Square"
import { getWinner, checkIfTie } from "../funcionesAdicionales"



function TicTacToe(props) {
  const namePlayer1 = props.player1;
  const namePlayer2 = props.player2;
  const weaponPlayer1 = props.weaponOfChoice;
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(weaponPlayer1);
  const [isGameOn, setIsGameOn] = useState(true);
  const [paragraphText, setParagraphText] = useState("");





  useEffect(() => {
    // Chequea si hay ganador, si lo hay termina el juego.
    if (getWinner(board) !== "" && isGameOn) {
      setIsGameOn(false);
    // Los jugadores en el código están definidos como "X" o "O", esta línea enlaza los nombres con los símbolos correspondientes.
      let winningPlayer = getWinner(board) === weaponPlayer1 ? namePlayer1 : namePlayer2;
      setParagraphText(`The winner is ${winningPlayer}!`);
    }

    // Chequea si hay empate y termina el juego si es el caso.
    else if (checkIfTie(board, isGameOn)) {
      setIsGameOn(false);
      setParagraphText("Draw!");
    }
    // Mientras el juego esté en marcha muestra a quien le toca. Nuevamente hay una línea para hacer enlace con nombres y símbolos.
    else if (isGameOn) {
      let jugadorActual = player === weaponPlayer1 ? namePlayer1 : namePlayer2;
      setParagraphText(`It's ${jugadorActual}'s turn: ${player}`);
    }

  }, [board, isGameOn, player, namePlayer1, namePlayer2, weaponPlayer1]);

  const chooseSquare = (square) => {
    // Recorre todo el tablero y si el cuadrado seleccionado es igual al index, reemplaza el valor por el valor de "player", sino lo deja como está.
    setBoard(board.map((value, index) => {
      if (square === index && value === "" && isGameOn) {
        return player;
      }
      else {
        return value;
      }
    }));

    // Cambia jugador cada turno
    if (player === "X" && isGameOn) {
      setPlayer("O");
    }
    else if (player === "O" && isGameOn) {
      setPlayer("X");
    }

  };

  const startOver = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setIsGameOn(true);
    // Manda datos a App.
    let dataToSend = [];
    props.passData(dataToSend);

  }


  return (
    <div className='App'>
      <p style={isGameOn ? { color: "white" } : { color: "#3de335" }}>{paragraphText}</p>

      <div className='board'>
        <div className='row'>
          <Square value={board[0]} onClick={() => { chooseSquare(0) }} id="s0" />
          <Square value={board[1]} onClick={() => { chooseSquare(1) }} id="s1" />
          <Square value={board[2]} onClick={() => { chooseSquare(2) }} id="s2" />
        </div>
        <div className='row'>
          <Square value={board[3]} onClick={() => { chooseSquare(3) }} id="s3" />
          <Square value={board[4]} onClick={() => { chooseSquare(4) }} id="s4" />
          <Square value={board[5]} onClick={() => { chooseSquare(5) }} id="s5" />
        </div>
        <div className='row'>
          <Square value={board[6]} onClick={() => { chooseSquare(6) }} id="s6" />
          <Square value={board[7]} onClick={() => { chooseSquare(7) }} id="s7" />
          <Square value={board[8]} onClick={() => { chooseSquare(8) }} id="s8" />
        </div>
      </div>
      <button onClick={startOver} className="btn-grad">Start over</button>
    </div>

  );
}

export default TicTacToe;