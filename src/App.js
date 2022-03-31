
import React from 'react';
import TicTacToe from './Components/TicTacToe';
import Modal from './Components/Modal';
import { useState, useEffect } from "react";






function App() {
  const [isModal, setIsModal] = useState(true);
  const [modalData, setModalData] = useState([]);

  const passData = (data) => {
    setModalData(data);
  };


  console.log(modalData, "modalData");
  console.log(modalData === [], "chequeando igualdad") 

  useEffect(() => {
    setIsModal(modalData.length === 0 ? true: false);
  }, [modalData])

  if (isModal) {
    return (
      <div>
        <Modal passData={passData} />
        <p style={{ color: "white" }}>{modalData}</p>
      </div>


    )
  }
  else {
    return (
      <TicTacToe player1={modalData[0]} player2={modalData[1]} weaponOfChoice={modalData[2]} weaponNotChosen={modalData[3]} />
    )
  }



  /* let dataToSend = [player1, player2, weaponOfChoice, weaponNotChosen, isPlayer1Selecting]; */
  {/*  */ }
  {/* <TicTacToe player1="Pepito" player2="Juanito" weaponOfChoice="O" weaponNotChosen="X"/> */ }


  /*   return (
      <div>
        <Modal/>
        <TicTacToe />
      </div>
  
    ) */
};

export default App;
