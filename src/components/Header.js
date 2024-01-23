import React from 'react'
import logo from "./assests/logo.png"
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
      <div>
        <header className="flex ">
          <div className='ps-5 flex '>
            <img style={{ height: "50px" }} src={logo} alt="Natureprint Logo " />
            <h1 className='ml-2'>Natureprint</h1>
          </div>
          <div className='spa'>
          <Link to='/calc'>
          <button className="button">Calculate</button>
                </Link>
            
            <button className="button">Donate</button>
          </div>
        </header>
      </div>
    );
  }