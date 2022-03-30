
import React from 'react';
import TicTacToe from './Components/TicTacToe';
import Modal from './Components/Modal';
import {useState} from "react";






function App() {
let isModal = true;

if (isModal) {
  return(
    <Modal/>
  )
}
else {
  return (
    <TicTacToe/>
  )
}
/*   return (
    <div>
      <Modal/>
      <TicTacToe />
    </div>

  ) */
};

export default App;
