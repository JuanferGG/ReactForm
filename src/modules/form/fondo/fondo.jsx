import React from 'react';
import './fondoStyle.css'
import fondo from './img/fondo-img.jpg'

const Fondo = () => {
    return (
        <div>
            <div class="area">
                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div>
            <img src={fondo}></img>
        </div>
    );
}

export default Fondo;
