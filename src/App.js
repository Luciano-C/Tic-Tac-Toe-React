
import React from 'react';
import TicTacToe from './Components/TicTacToe';
import Modal from './Components/Modal';
import { useState, useEffect } from "react";






function App() {
  const [isModal, setIsModal] = useState(true);
  const [modalData, setModalData] = useState([]);

  // Función auxiliar que sirve para que los componentes hijos (Modal, TicTacToe) envien información al padre (App)
  const passData = (data) => {
    setModalData(data);
  };

  // Monitorea si hay datos de nombres y armas ingresados y re-renderiza acordemente 
  useEffect(() => {
    setIsModal(modalData.length === 0 ? true: false);
  }, [modalData])

// Renderización condicional de la página dependiendo de si los datos de modal fueron llenados o no
  if (isModal) {
    return (
      <div>
        <Modal passData={passData} />
      </div>
    )
  }
  else {
    return (
      <TicTacToe player1={modalData[0]} player2={modalData[1]} weaponOfChoice={modalData[2]} passData={passData}/>
    )
  }
};

export default App;
