import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css';
import Btn from './../Button/Button';

export default function Header() {
  return (
    <div className='header-container'>
        <Navbar>
            <ul>
                <li className='active'><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">aboutthetests</a></li>
                <li><a href="#">level1</a></li>
                <li><a href="#">shop</a></li>
            </ul>
        </Navbar>

        <div className="header-mid">
            <div className="title">
                <h1>We Change Everything <p>React</p></h1>
            </div>
            <div className="desc">
                <p>This is the only WordPress theme you will ever want to use.</p>
            </div>
            <div className="btns">
                <Btn text="Read More"/>
                <a href="#">Download Now</a>
            </div>
        </div>

    </div>
  )
}