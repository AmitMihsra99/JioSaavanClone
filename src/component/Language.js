import React ,{useState} from 'react'

const Language = () => {
    const options = [
        'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5',
        'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10',
        'Option 11', 'Option 12', 'Option 13', 'Option 14', 'Option 15'
      ];
    
      const [selectedOption, setSelectedOption] = useState(null);
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
  return (
    <>
    <div className="drop">
    <div className="dropdown">
      <button className="dropdown-btn">
        Select an Option
      </button>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
            {selectedOption === option && <span className="checkmark">&#10003;</span>}
          </div>
        ))}
      </div>
    </div>
  </div>
    </>
  )
}

export default Language
