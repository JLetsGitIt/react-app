import React from "react";
import "./FinancialInfo.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FinancialInterestsSection from "./components/ListGroup";
import DropDown from "./components/DropDown";
import RadioGroup from "./components/RadioGroup";

interface GlobalState {
  viewportWidth: number;
  setViewportWidth: React.Dispatch<React.SetStateAction<number>>;
  dynamicLength: number;
  setDynamicLength: React.Dispatch<React.SetStateAction<number>>;
}

interface FinancialInfoProps {
  GlobalState: GlobalState;
}

function FinancialInfo({ GlobalState }: FinancialInfoProps) {
  const [selectedOption, setSelectedOption] = useState("Select");
  let status = [
    "Single",
    "Married, filing taxes together",
    "Married, filing taxes separately",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // let interests = ["Budgeting", "Investing", "Credit Management", "Debt Management",
  //   "Retirement Planning", "Tax Planning", "Goal Setting", "Estate Planning"];
  // const [selectedIndex2, setSelectedIndex2] = useState(-1);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);
  const navigate = useNavigate();

  // displays the dropdown selection
  const dropFunction = () => {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  // sets the selection option to the clicked one and displays it
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  // returns the style of the radio button based on the index/selection
  const handleRadioClick = (index: number) => {
    let className = "";
    if (index === 0) {
      className += "e10_722";
    } else if (index === 1) {
      className += "e10_723";
    } else if (index === 2) {
      className += "e10_724";
    }
    if (selectedIndex === index) {
      className += " active";
    }
    return className;
  };

  // sets the selected button to active
  const handleClick = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      setIsActive1(!isActive1);
    } else if (buttonNumber === 2) {
      setIsActive2(!isActive2);
    } else if (buttonNumber === 3) {
      setIsActive3(!isActive3);
    } else if (buttonNumber === 4) {
      setIsActive4(!isActive4);
    } else if (buttonNumber === 5) {
      setIsActive5(!isActive5);
    } else if (buttonNumber === 6) {
      setIsActive6(!isActive6);
    } else if (buttonNumber === 7) {
      setIsActive7(!isActive7);
    } else if (buttonNumber === 8) {
      setIsActive8(!isActive8);
    }
  };

  //navigates to the onboarding complete page
  const handleNextPage = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/onboarding-complete");
  };

  const { viewportWidth, setViewportWidth, dynamicLength, setDynamicLength } =
    GlobalState;
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // const [dynamicLength, setDynamicLength] = useState(0.37 * viewportWidth);

  useEffect(() => {
    const handleResize = () => {
      const newViewportWidth = window.innerWidth;
      setViewportWidth(newViewportWidth);
      setDynamicLength(0.37 * newViewportWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="e10_684">
      // header
      <div className="fi_header">
        <div className="e10_685"></div>
        <hr style={{ width: `${dynamicLength}px` }} className="e10_686"></hr>
        <div className="e10_687">
          <svg height="80" width="100%">
            <g
              fill="none"
              stroke="rgba(124.95, 126.2, 127.5, 1)"
              stroke-width="2"
            >
              <path stroke-dasharray="10,10" d={`M5 7 l${dynamicLength} 0`} />
            </g>
          </svg>
        </div>
        <div className="fi-img"></div>
        <div className="e10_688">
          <h1>
            <span className="ei10_688_0">1</span>
          </h1>
        </div>
        <h1>
          <span className="e10_689">Register</span>
        </h1>
        <h1>
          <span className="e10_690">Add Your Financial Info</span>
        </h1>
        <div className="e10_691">
          <div className="e10_692"></div>
          <div className="e10_693">
            <h1>
              <span className="ei10_693_0">2</span>
            </h1>
          </div>
        </div>
        <h1>
          <span className="e10_694">Earn Your Badge!</span>
        </h1>
      </div>
      // financial interests section
      <div
        style={{
          height: "1px",
          top: "-10px",
          // display: "flex",
          // justifyContent: "space-between",
          // width: "200px",
        }}
      >
        <div className="mid_line" style={{ position: "relative" }}></div>

        <div
          // style={{
          //   position: "absolute",
          //   left: "80%",
          //   transform: "translate(-50%, -50%) translateX(10vw)",
          //   top: "1.5%",
          // }}
          className="fi_interests"
        >
          <FinancialInterestsSection
            handleClick={handleClick}
            isActive1={isActive1}
            isActive2={isActive2}
            isActive3={isActive3}
            isActive4={isActive4}
            isActive5={isActive5}
            isActive6={isActive6}
            isActive7={isActive7}
            isActive8={isActive8}
          />
        </div>
      </div>
      // next button
      <button className="e10_699" onClick={(event) => handleNextPage(event)}>
        <h3>
          <span className="e10_700">Next</span>
        </h3>
      </button>
      //heading
      <h1>
        <span className="e10_718">
          Tell us a little more about your financial personality
        </span>
      </h1>
      {/* <div className="e10_719">
        <span className="ei10_719_0">Select</span>
        <div className="ei10_719_1">
          <div className="ei10_719_626_10214_1337_2542"></div>
        </div>
      </div> */}
      //dropdown
      <DropDown
        dropFunction={dropFunction}
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
      />
      <p>
        <span className="e10_720">Income</span>
      </p>
      // radio group
      <span className="e10_721">Relationship Status</span>
      {/* <span className="e10_725">Single</span>
      <span className="e10_726">Married, filing taxes together</span>
      <span className="e10_727">Married, filing taxes separately</span> */}
      <RadioGroup
        status={status}
        handleRadioClick={handleRadioClick}
        setSelectedIndex={setSelectedIndex}
      />
      <div className="e10_728">
        <h1>
          <span className="ei10_728_0">1</span>
        </h1>
      </div>
      <h1>
        <span className="e10_729">Financial Information</span>
      </h1>
    </div>
  );
}

export default FinancialInfo;
