import React from "react";
import embed from "./configure";
import connect from "./connect";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [n, setN] = useState();

  useEffect(() => {
    const app = connect({
      url: "https://2w32pfh3l2b94yd.eu.qlikcloud.com",
      webIntegrationId: "pJZiFzzGAFrWk0EtZ9qmvHZSP_ltp7SJ",
      appId: "d711350f-0729-4b03-bb10-8de83c8cc4a7",
    });
  });

  return <div></div>;
};

export default App;
