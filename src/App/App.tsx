import React from "react";
import { AppGrid } from "./App.styles";
import BigOChart from "../BigOChart/BigOChart";
import PythonFunctions from "../PythonFunctions/PythonFunctions";


const App: React.FunctionComponent = () => {
  return (
    <AppGrid>
      <BigOChart />
      <PythonFunctions />
    </AppGrid>
  );
}

export default App;
