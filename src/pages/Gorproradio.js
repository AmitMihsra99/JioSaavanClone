import React, { useState } from 'react';
import "./pagecss.css";

const Goproradio = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radio-group">
      <label className="radio-label">
        <input
          className="radio-input"
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Pay With Amazon Pay
      </label>
      <label className="radio-label">
        <input
          className="radio-input"
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Pay With Paytam
      </label>
          {/*Selected option: {selectedOption}*/}
    </div>
  );
};

export default Goproradio;
