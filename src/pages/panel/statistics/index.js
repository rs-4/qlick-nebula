import React from "react";
import NebulaObject from "../../../components/qlickComponents";
import { Container, HorizontalLine, Title } from "../../../components/styled";

const Settings = () => {
  return (
    <div>
      <Container>
        <Title>Qlik Create Object / Stats </Title>
        <HorizontalLine />
        <NebulaObject
          objectType="linechart"
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
    </div>
  );
};

export default Settings;
