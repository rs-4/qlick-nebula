import React, { useState } from "react";
import SidebarComponent from "../../components/layout/sidebar";
import { Route, Routes } from "react-router-dom";
import Table from "./table";
import App from "../../App";
import Statistics from "./statistics";
import Charts from "./charts";
import Default from "./default";
import styled from "styled-components";

const Content = styled.div`
  margin-left: ${(props) => (props.isCollapsed ? "80px" : "250px")};
`;

const Panel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
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
    </>
  );
};

export default Panel;
