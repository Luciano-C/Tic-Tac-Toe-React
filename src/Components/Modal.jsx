import '../App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Square from "./Square"


const Modal = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player1Weapon, setPlayer1Weapon] = useState("");
    const [player2Weapon, setPlayer2Weapon] = useState("");
    const [weaponOfChoice, setWeaponOfChoice] = useState("");
    const [weaponNotChosen, setWeaponNotChosen] = useState("");
    const [isPlayer1Selecting, setIsplayer1Selecting] = useState(true);

   useEffect(() => {
        setPlayer1(input1);
        setPlayer2(input2);
    }, [input1, input2])

    useEffect(() => {
        setPlayer1Weapon(weaponOfChoice);
        setPlayer2Weapon(weaponNotChosen);
    }, [weaponOfChoice, weaponNotChosen])

    const weaponHandler = (weaponOfChoice) => {
        if (isPlayer1Selecting && input1 !== "" && input2 !== "") {
            setWeaponOfChoice(weaponOfChoice);
            setWeaponNotChosen(`${weaponOfChoice === "X" ? "O" : "X"}`);
            setIsplayer1Selecting(false)  ;  
        }
        else if (!isPlayer1Selecting) {
            console.log("Ready")
        }
        else {
            alert("Input 2 names")
        }
    }

    //Temporales para indicar que se tiene cada jugador y sus simbolos (armas)
    console.log(player1);
    console.log(player2)
    console.log(player1Weapon);
    console.log(player2Weapon);
    return (
        <div className='App'>
            <p style={{ color: "white" }}>Pick a Weapon</p>
            <div className='modalBackground'>
                <div className='chooseWeaponMenu'>
                    <p style={{ color: "white" }} id="modal-p2">CHOOSE YOUR WEAPON</p>
                    <div className='nameOptions'>
                        <input id='modalInput1' placeholder='Player 1' onChange={(e) => {setInput1(e.target.value)}}/>
                        <input id='modalInput2' placeholder='Player 2' onChange={(e) => {setInput2(e.target.value)}}/>
                    </div>
                    <div className='weaponOptions'>
                        <Square value="X" id="menuSquareX" onClick={() => {weaponHandler("X")}}/>
                        <Square value="O" id="menuSquareO" onClick={() => {weaponHandler("O")}}/>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Modal;