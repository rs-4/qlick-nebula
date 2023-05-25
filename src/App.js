import QlikObject from "./components/qlickApi";
import React from "react";

const App = () => (
  <div>
    <QlikObject
      type="table"
      id="hJmCHF"
      appId="d711350f-0729-4b03-bb10-8de83c8cc4a7"
    />
    <QlikObject
      type="barcharts"
      id="QTgnVa"
      appId="d711350f-0729-4b03-bb10-8de83c8cc4a7"
    />
    <QlikObject
      type="map"
      id="najNWd"
      appId="d711350f-0729-4b03-bb10-8de83c8cc4a7"
    />
  </div>
);

export default App;
