import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Calc2() {
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
        <h4>GETTING STARTED </h4>
        <h1>...and over which timeframe?</h1>
        <p>Select an option</p>

        <div className='category-list'>
          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Last Month</h2>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>

          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Last 3 Months</h2>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>

          <div className='category btn btn-primary'>
            <label>
              <div className='btn text-white'>
                <h2>Last Year</h2>
              </div>
            </label>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div className='tick-mark'></div>
          </div>
        </div>

        <div className='butt'>
          <div className='button-container'>
            <Link to='/CATEGORIES'>
              <button className='btn-back'>
                Back
              </button>
            </Link>
          </div>

          <div className='button-container'>
            <Link to='/Timeframe'>
              <button className='btn-next' disabled={!atLeastOneChecked}>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
