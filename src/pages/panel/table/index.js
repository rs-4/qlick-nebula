import React from "react";
import NebulaObject from "../../../components/qlickComponents";
import { Container, HorizontalLine, Title } from "../../../components/styled";

const Statistics = () => {
  return (
    <Container>
      <Title>Qlik Create Object / Table </Title>
      <HorizontalLine />
      <NebulaObject
      objectType="table"
      size="xl"
       properties={{
        qHyperCubeDef: {
        qDimensions: [
        { qDef: { qFieldDefs: ["Title"] } },
        { qDef: { qFieldDefs: ["Features.Handheld?"] } },
        { qDef: { qFieldDefs: ["Features.MaxPlayers"] } },
        { qDef: { qFieldDefs: ["Features.Multiplatform?"] } },
        { qDef: { qFieldDefs: ["Features.Online?"] } },
        { qDef: { qFieldDefs: ["Metadata.Genres"] } },
        { qDef: { qFieldDefs: ["Metadata.Licensed?"] } },
       ],
      qMeasures: [],
      qInitialDataFetch: [{ qWidth: 35, qHeight: 50 }],
    },
  }}
/>
    </Container>
  );
};

export default Statistics;
