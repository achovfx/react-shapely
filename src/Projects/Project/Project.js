import React from 'react';
import './Project.css';

export default function ({title,img}) {
  return (
    <div className="Projectimg">
        <img src={img} alt="" />
        <div className="name">
            <p>{title}</p>
        </div>
    </div>
  )
}