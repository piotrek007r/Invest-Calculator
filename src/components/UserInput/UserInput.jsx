import React, { useState } from "react";
import { calculateInvestmentResults } from "../../util/investment";

const UserInput = (props) => {
  const [calcData, setCalcData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });


  function updateCalcHandler(data, input) {
    const newData = {
      ...calcData,
      [input]: data,
    };
    setCalcData(newData);

    const calcFuntion = calculateInvestmentResults(newData);
    props.onSaveCalcData(calcFuntion);
  }

  function updateInitialInvestment(e) {
    updateCalcHandler(+e.target.value, "initialInvestment");
  }

  function updateAnnualInvestment(e) {
    updateCalcHandler(+e.target.value, "annualInvestment");
  }

  function updateReturn(e) {
    updateCalcHandler(+e.target.value, "expectedReturn");
  }

  function updateDuration(e) {
    updateCalcHandler(+e.target.value, "duration");
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" onChange={updateInitialInvestment}></input>
        </p>
        <p>
          <label htmlFor="">Annual investment</label>
          <input type="number" onChange={updateAnnualInvestment}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" onChange={updateReturn}></input>
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" onChange={updateDuration}></input>
        </p>
      </div>
    </div>
  );
};

export default UserInput;
