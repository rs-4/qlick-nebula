import React from "react";
import NebulaObject from "../../../components/qlickComponents";
import { Container, HorizontalLine, Title } from "../../../components/styled";

const Index = () => {
  return (
    <Container>
      <Title>Qlik Create Object / Charts </Title>
      <HorizontalLine />
      <NebulaObject
        objectType="barchart"
        size="xl"
        properties={{
          qHyperCubeDef: {
            qDimensions: [{ qDef: { qFieldDefs: ["Metadata.Genres"] } }],
            qMeasures: [{ qDef: { qDef: "Count(Title)" } }],
            qInitialDataFetch: [{ qWidth: 10, qHeight: 50 }],
          },
          showTitles: true,
        }}
      />
    </Container>
  );
};

export default Index;
