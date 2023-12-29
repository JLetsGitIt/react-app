import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import FinancialInfo from "./pages/FinancialInfo";
import OnboardingComplete from "./pages/OnboardingComplete";
import React from "react";

function App() {
  //GlobalState
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [dynamicLength, setDynamicLength] = useState(0.37 * viewportWidth);

  const GlobalState = {
    viewportWidth,
    setViewportWidth,
    dynamicLength,
    setDynamicLength,
  };

  //Navigation
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<CreateAccount GlobalState={GlobalState} />}
          />
          <Route
            path="/financial-info"
            element={<FinancialInfo GlobalState={GlobalState} />}
          />
          <Route
            path="/onboarding-complete"
            element={<OnboardingComplete GlobalState={GlobalState} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
