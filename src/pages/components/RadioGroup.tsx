import React from "react";

interface RadioGroupProps {
  status: string[];
  handleRadioClick: (index: number) => string;
  setSelectedIndex: (index: number) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  status,
  handleRadioClick,
  setSelectedIndex,
}) => {
  return (
    <>
      {status.length === 0 && <p>No item found</p>}
      <ul id="myRadio">
        {status.map((item, index) => (
          <li
            className={handleRadioClick(index)}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            <span className="e10_725">{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RadioGroup;
