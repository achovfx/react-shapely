import React from 'react';
import './HomeItem.css';
import Btn from './../../Button/Button.js';

export default function HomeItem({dir = "ltr", title = "title",desc = "desc",btnText = "Btn Text",img = "./images/macbook.png"}) {
  
  if(dir === "ltr"){
    return (
      <div className='homeItem'>
          <div className="details">
              <h3>{title}</h3>
              <p>{desc}</p>
              <Btn text={btnText} />
          </div>
          <div className="img">
              <img src={img} alt="img"/>
          </div>
      </div>
    )
  }
  return(
    <div className='homeItem rtlMode'>
          <div className="details">
              <h3>{title}</h3>
              <p>{desc}</p>
              <Btn text={btnText} />
          </div>
          <div className="img">
              <img src={img} alt="img"/>
          </div>
    </div>
  )
  

}
