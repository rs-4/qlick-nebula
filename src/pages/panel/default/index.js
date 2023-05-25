import React from "react";
import styled from "styled-components";
import QlikObject from "../../../components/qlickApi";
import NebulaObjectKpi from "../../../components/qlickComponents/kpi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const HorizontalLine = styled.hr`
  width: 80%;
`;

const Box = styled.div`
  display: flex;

  flex-direction: colomn;
  padding: 2rem;
  width: 100%;
`;

const BoxWithBorder = styled(Box)`
  border: 1px solid black;
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
`;

const Index = () => {
  return (
    <Container>
      <Title>Api Qlik Connection</Title>
      <Box>
        <QlikObject
          type="kpi"
          id="cnWvHs"
          appId="de21a6e5-4b72-4026-8560-e0eb89333e96"
        />
      </Box>
      <HorizontalLine />
      <Title>Qlik Create Object</Title>
      <Box>
        <NebulaObjectKpi
          objectType="kpi"
          appId="de21a6e5-4b72-4026-8560-e0eb89333e96"
          properties={{
            qHyperCubeDef: {
              qDimensions: [],

              qMeasures: [
                {
                  qDef: {
                    qDef: "Count(first_name)",
                    qLabel: "Nombre de prénoms",
                    qColor: "#FF0000",
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
            },
          }}
        />

        <NebulaObjectKpi
          objectType="kpi"
          appId="de21a6e5-4b72-4026-8560-e0eb89333e96"
          properties={{
            qHyperCubeDef: {
              qDimensions: [],

              qMeasures: [
                {
                  qDef: {
                    qDef: "Count(first_name)",
                    qLabel: "Nombre de prénoms",
                    qColor: "#FF0000",
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default Index;
