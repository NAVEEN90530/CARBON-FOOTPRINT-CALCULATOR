// CalculatorForm.js
import React, { useState } from 'react';

const CalculatorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Example input
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter data"
          name="exampleInput"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Calculate
      </button>
    </form>
  );
};

export default CalculatorForm;
