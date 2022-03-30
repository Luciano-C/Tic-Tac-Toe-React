import '../App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Square from "./Square"


const Modal = () => {
    return (
        <div className='App'>
            <p style={{ color: "white" }}>Pick a Weapon</p>
            <div className='modalBackground'>
                <div className='chooseWeaponMenu'>
                    <p style={{ color: "white" }} id="modal-p2">CHOOSE YOUR WEAPON</p>
                    <div className='nameOptions'>
                        <input id='modalInput1'/>
                        <input id='modalInput2'/>
                    </div>
                    <div className='weaponOptions'>
                        <Square value="X" id="menuSquareX"/>
                        <Square value="O" id="menusSquareO"/>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Modal;