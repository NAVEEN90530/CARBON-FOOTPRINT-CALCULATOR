import React, { useState } from 'react';
import "./calc.css";
import { Link } from 'react-router-dom';

export default function Calc() {
  const [atLeastOneChecked, setAtLeastOneChecked] = useState(false);

  const handleCheckboxChange = () => {
    // Check if at least one checkbox is checked
    const checkboxes = document.querySelectorAll('.category input[type="checkbox"]');
    const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
    setAtLeastOneChecked(isChecked);
  };

  return (
    <div className='back'>
      <div className='container'>
        <h4>GETTING STARTED - CATEGORIES</h4>
        <h1>Before we start, which categories would you like to include in your household's carbon footprint calculation?</h1>
        <p>Select all that apply</p>
        <div className='category-list'>
          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Travel</h2>
                <p>Road, Rail, Air, Ocean</p>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>
          
          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Energy</h2>
                <p>Electricity and Other Utilities</p>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>
          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Water</h2>
                <p>State water supply</p>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>

          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Transport</h2>
                <p>Vehicle & public transport</p>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>

          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Food & Drinks</h2>
                <p>Household grocery & dining</p>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>

          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Waste</h2>
                <p>General Waste disposal</p>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>


        </div>

        <div className='button-container'>
          <Link to='/Timeframe'>
            <button disabled={!atLeastOneChecked}>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
