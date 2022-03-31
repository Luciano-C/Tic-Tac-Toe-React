
import React from 'react';
import TicTacToe from './Components/TicTacToe';
import Modal from './Components/Modal';
import {useState} from "react";






function App() {
const [isModal, setIsModal] = useState(true);
const[modalData, setModalData] = useState([]);

const passData = (data) => {
  setModalData(data); 
}

/* return (
  <div>
    <Modal passData={passData}/>
    <p style={{color:"white"}}>{modalData}</p>
  </div>
) */

if (isModal) {
  return(
    <Modal passData={passData}/>
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
