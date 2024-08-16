import React from 'react';
import './Button.css';

export default function Button({text}) {
  return (
    <div>
        <a className='bb' href="#">{text}</a>
    </div>
  )
}
