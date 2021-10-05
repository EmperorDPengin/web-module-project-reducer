import React, { useReducer } from 'react';
import reducer, { initialState} from "./reducers";
import './App.css';
import  { applyNumber, changeOperation, clearDisplay, setMemory } from "./actions";
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] =useReducer(reducer, initialState);

  const calculateNumber = (e) => {
    // console.log(e.target.textContent)
    dispatch(applyNumber(parseInt(e.target.textContent)));
  }

  const operationChange = (e) => {
    // console.log(e.target);
    dispatch(changeOperation(e.target.textContent));
  }

  const clearTheDisplay = () => {
    dispatch(clearDisplay());
  }

  const handleSetMemory = (e) => {
    dispatch(setMemory(e.target.textContent));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleSetMemory}/>
              <CalcButton value={"MR"} onClick={handleSetMemory}/>
              <CalcButton value={"MC"} onClick={handleSetMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={calculateNumber}/>
              <CalcButton value={2} onClick={calculateNumber}/>
              <CalcButton value={3} onClick={calculateNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={calculateNumber}/>
              <CalcButton value={5} onClick={calculateNumber}/>
              <CalcButton value={6} onClick={calculateNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={calculateNumber}/>
              <CalcButton value={8} onClick={calculateNumber}/>
              <CalcButton value={9} onClick={calculateNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operationChange}/>
              <CalcButton value={"*"} onClick={operationChange}/>
              <CalcButton value={"-"} onClick={operationChange}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearTheDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
