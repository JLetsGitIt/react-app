import React from "react";

interface DropDownProps {
  dropFunction: () => void;
  selectedOption: string;
  handleOptionClick: (option: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  dropFunction,
  selectedOption,
  handleOptionClick,
}) => {
  return (
    <div className="dropdown">
      <button onClick={() => dropFunction()} className="e10_719">
        <p>
          <span className="ei10_719_0">
            {selectedOption === "Select" ? "Select" : selectedOption}
          </span>
        </p>
        {/* if(selectedOption) {
            <p><span className="ei10_719_0">{selectedOption}</span></p>
          } else {
            <p><span className="ei10_719_0">Select</span></p>
          } */}
        <i className="bi bi-chevron-down fi-icon3"></i>
      </button>
      <div id="myDropdown" className="dropdown-content">
        <a href="#" onClick={() => handleOptionClick("Less than $10,000")}>
          Less than $10,000
        </a>
        <a href="#" onClick={() => handleOptionClick("$10,000 - $60,000")}>
          $10,000 - $60,000
        </a>
        <a href="#" onClick={() => handleOptionClick("$60,000 - $150,000")}>
          $60,000 - $150,000
        </a>
        <a href="#" onClick={() => handleOptionClick("$150,000 - $300,000")}>
          $150,000 - $300,000
        </a>
        <a href="#" onClick={() => handleOptionClick("$300,000 or more")}>
          $300,000 or more
        </a>
      </div>
    </div>
  );
};

export default DropDown;
