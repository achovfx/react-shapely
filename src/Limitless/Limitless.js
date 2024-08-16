import React from 'react';
import "./Limitless.css";
import Btn from './../Button/Button.js';

export default function Limitless() {
  return (
    <div className='LimitlessContainer'>
        <div className="details">
            <h3>Limitless Options</h3>
            <p>Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante</p>
            <Btn text="DOWNLOAD" />
        </div>
        <div className="limitlessImg">
            <img src="./images/Limitless.jpg" alt="" />
        </div>
    </div>
  )
}
