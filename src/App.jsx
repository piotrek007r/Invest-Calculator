import React, { useState } from "react";
import Header from "./components/Header/header";
import UserInput from "./components/UserInput/UserInput";
import TableDisplay from "./components/Table/Table";

function App() {
  const [newData, setNewData] = useState({});

  const setCalcHandler = (data) => {
    setNewData(data);
  };

  return (
    <div>
      <Header />
      <UserInput onSaveCalcData={setCalcHandler} />
      <TableDisplay object={newData} />
    </div>
  );
}

export default App;
