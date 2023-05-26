import React, { useState, useEffect } from "react";
import SidebarComponent from "../../components/layout/sidebar";
import { Route, Routes } from "react-router-dom";
import Table from "./table";
import Statistics from "./statistics";
import Charts from "./charts";
import Default from "./default";
import styled from "styled-components";
import AppContext from "../../context/appContext";
import connect from "../../utils/connect";

const Content = styled.div`
  margin-left: ${(props) => (props.isCollapsed ? "80px" : "250px")};
`;

const Panel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [app, setApp] = useState(null);

  useEffect(() => {
    const init = async () => {
      console.log("init");
      const app = await connect({
        appId: "83870b78-b0ac-422d-bc03-8d5dec5086a4",
        url: "https://2w32pfh3l2b94yd.eu.qlikcloud.com",
        webIntegrationId: "pJZiFzzGAFrWk0EtZ9qmvHZSP_ltp7SJ",
      });
      setApp(app);
    };

    init();
  }, []);

  return (
    <>
      <AppContext.Provider value={app}>
        <SidebarComponent
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Content isCollapsed={isCollapsed}>
          <Routes>
            <Route path="table" element={<Table />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="charts" element={<Charts />} />
            <Route path="default" element={<Default />} />
          </Routes>
        </Content>
      </AppContext.Provider>
    </>
  );
};

export default Panel;
