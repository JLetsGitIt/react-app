import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import CreateAccount from './pages/CreateAccount';
import FinancialInfo from './pages/FinancialInfo';
import OnboardingComplete from './pages/OnboardingComplete';

function App() {
  const [] = useState({});

  const GlobalState = {

}
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<CreateAccount GlobalState={GlobalState}/>} />
          <Route path='/financial-info' element={<FinancialInfo/>}/>
          <Route path='/onboarding-complete' element={<OnboardingComplete/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
