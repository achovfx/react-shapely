import React from 'react';
import './SmallSection.css';
import Btn from './../Button/Button.js';

export default function SmallSection() {
  return (
    <div className='section-container'>
        <h3>Small Parallax Section</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis.</p>
        <Btn text="MORE INFO" />
    </div>
  )
}