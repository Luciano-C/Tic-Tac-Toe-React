import '../App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Square from "./Square"


const Modal = (props) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player1Weapon, setPlayer1Weapon] = useState("");
    const [player2Weapon, setPlayer2Weapon] = useState("");
    const [weaponOfChoice, setWeaponOfChoice] = useState("");
    const [weaponNotChosen, setWeaponNoChosen] = useState("");
    const [isPlayer1Selecting, setIsplayer1Selecting] = useState(true);

    // Actualiza nombre de jugadores de acuerdo al input.
    useEffect(() => {
        setPlayer1(input1);
        setPlayer2(input2);
    }, [input1, input2])
    // Actualiza armas (símbolos) de cada jugador de acuerdo a lo elegido con el click.
    useEffect(() => {
        setPlayer1Weapon(weaponOfChoice);
        setPlayer2Weapon(weaponNotChosen);
    }, [weaponOfChoice, weaponNotChosen])

    // Función onClick para los cuadros con los símbolos.
    // Requiere que ambos nombres estén ingresados. Actualiza arma seleccionada y no seleccionada y asigna la seleccionada al jugador 1.
    // Posteriormente termina el modo de selección y envía la información a la App en forma de arreglo.
    const weaponHandler = (weaponOfChoice) => {
        if (isPlayer1Selecting && input1 !== "" && input2 !== "") {
            let weaponNotChosen = `${weaponOfChoice === "X" ? "O" : "X"}`
            setWeaponOfChoice(weaponOfChoice);
            setWeaponNoChosen(weaponNotChosen);
            setIsplayer1Selecting(false);
            // Envía información a App.
            let dataToSend = [player1, player2, weaponOfChoice, weaponNotChosen];
            props.passData(dataToSend);
        }
        else {
            alert("Input 2 names")
        }
    }


    return (
        <div className='App'>
            <p style={{ color: "white" }}>Pick a Weapon</p>
            <div className='modalBackground'>
                <div className='chooseWeaponMenu'>
                    <p style={{ color: "white" }} id="modal-p2">CHOOSE YOUR WEAPON</p>
                    <div className='nameOptions'>
                        <input id='modalInput1' placeholder='Player 1' onChange={(e) => { setInput1(e.target.value) }} />
                        <input id='modalInput2' placeholder='Player 2' onChange={(e) => { setInput2(e.target.value) }} />
                    </div>
                    <div className='weaponOptions'>
                        <Square value="X" id="menuSquareX" onClick={() => { weaponHandler("X") }} />
                        <Square value="O" id="menuSquareO" onClick={() => { weaponHandler("O") }} />
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Modal;