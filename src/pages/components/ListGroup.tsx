import React from "react";

interface FinancialInterestsSectionProps {
  handleClick: (index: number) => void;
  isActive1: boolean;
  isActive2: boolean;
  isActive3: boolean;
  isActive4: boolean;
  isActive5: boolean;
  isActive6: boolean;
  isActive7: boolean;
  isActive8: boolean;
}

const ListGroup: React.FC<FinancialInterestsSectionProps> = ({
  handleClick,
  isActive1,
  isActive2,
  isActive3,
  isActive4,
  isActive5,
  isActive6,
  isActive7,
  isActive8,
}) => {
  return (
    //style={{ position: "relative", right: `10px` }}
    <div>
      <div className="e10_703">
        <h1>
          <span className="ei10_703_0">2</span>
        </h1>
      </div>
      <h1>
        <span className="e10_704">My Financial Interests</span>
      </h1>

      <button
        className={`e10_705 scale-up ${isActive1 ? "active_bud0" : ""}`}
        onClick={() => handleClick(1)}
      >
        <p>
          <span className={`e10_706 ${isActive1 ? "active_bud1" : ""}`}>
            Budgeting
          </span>
        </p>
        <i
          className={`bi bi-${isActive1 ? "dash fi-icon1" : "plus fi-icon2"}`}
        ></i>
      </button>
      <button
        className={`e10_711 scale-up ${isActive2 ? "active_bud0" : ""}`}
        onClick={() => handleClick(2)}
      >
        <p>
          <span className={`ei10_711_0 ${isActive2 ? "active_bud1" : ""}`}>
            Tax Planning
          </span>
        </p>
        <i
          className={`bi bi-${isActive2 ? "dash fi-icon1" : "plus fi-icon2"}`}
        ></i>
      </button>

      <button
        className={`e10_712 scale-up ${isActive3 ? "active_bud0" : ""}`}
        onClick={() => handleClick(3)}
      >
        <span className={`ei10_712_0 ${isActive3 ? "active_bud1" : ""}`}>
          Investing
        </span>
        <i
          className={`bi bi-${isActive3 ? "dash fi-icon1" : "plus fi-icon2"}`}
        ></i>
      </button>
      <button
        className={`e10_713 scale-up ${isActive4 ? "active_bud0" : ""}`}
        onClick={() => handleClick(4)}
      >
        <span className={`ei10_713_0 ${isActive4 ? "active_bud1" : ""}`}>
          Credit Management
        </span>
        <i
          className={`bi bi-${isActive4 ? "dash fi-icon1" : "plus fi-icon2"}`}
        ></i>
      </button>
      <button
        className={`e10_714 scale-up ${isActive5 ? "active_bud0" : ""}`}
        onClick={() => handleClick(5)}
      >
        <span className={`ei10_714_0 ${isActive5 ? "active_bud1" : ""}`}>
          Goal Setting
        </span>
        <i
          className={`bi bi-${isActive5 ? "dash fi-icon1" : "plus fi-icon2"}`}
        ></i>
      </button>
      <button
        className={`e10_715 scale-up ${isActive6 ? "active_bud0" : ""}`}
        onClick={() => handleClick(6)}
      >
        <span className={`ei10_715_0 ${isActive6 ? "active_bud1" : ""}`}>
          Estate Planning
        </span>
        <i
          className={`bi bi-${isActive6 ? "dash fi-icon1" : "plus fi-icon2"}`}
        ></i>
      </button>
      <button
        className={`e10_716 scale-up ${isActive7 ? "active_bud0" : ""}`}
        onClick={() => handleClick(7)}
      >
        <span className={`ei10_716_0 ${isActive7 ? "active_bud1" : ""}`}>
          Debt Management
        </span>
        <i
          className={`bi bi-${isActive7 ? "dash fi-icon1" : "plus fi-icon2"}`}
        ></i>
      </button>
      <div style={{ right: `10px` }}>
        <button
          className={`e10_717 scale-up ${isActive8 ? "active_bud0" : ""}`}
          onClick={() => handleClick(8)}
        >
          <span className={`ei10_717_0 ${isActive8 ? "active_bud1" : ""}`}>
            Retirement Planning
          </span>
          <i
            className={`bi bi-${isActive8 ? "dash fi-icon1" : "plus fi-icon2"}`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ListGroup;
