import React, { useState } from "react";
import { formatter } from "../../util/investment";

const TableDisplay = (props) => {
  console.log(props.object);
  let tableBody = [];
  if (props.object[0]) {
    tableBody = props.object;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableBody.map((el) => (
          <tr key={el.id}>
            <td>{el.year}</td>
            <td>{formatter.format(el.valueEndOfYear)}</td>
            <td>{formatter.format(el.interest)}</td>
            <td>{formatter.format(el.totalInterest)}</td>
            <td>{formatter.format(el.valueEndOfYear - el.totalInterest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDisplay;
