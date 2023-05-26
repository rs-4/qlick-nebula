import React from "react";
import styled from "styled-components";
import NebulaObject from "../../../components/qlickComponents";
import { Container, HorizontalLine, Title } from "../../../components/styled";

const Box = styled.div`
  display: flex;
  flex-direction: colomn;
  padding: 2rem;
  width: 100%;
`;

const Index = () => {
  return (
    <Container>
      <Title>Qlik Create Object</Title>
      <HorizontalLine />
      <Box>
        <NebulaObject
          objectType="kpi"
          properties={{
            qHyperCubeDef: {
              qDimensions: [],

              qMeasures: [
                {
                  qDef: {
                    qDef: "Count(Title)",
                    qLabel: "Number of videos games",
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
            },
          }}
        />
        <NebulaObject
          objectType="kpi"
          properties={{
            qHyperCubeDef: {
              qDimensions: [],

              qMeasures: [
                {
                  qDef: {
                    qDef: "Avg(Release.Year)",
                    qLabel: "Average release year",
                    qNumFormat: {
                      qType: "I",
                      qnDec: 0,
                    },
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
            },
          }}
        />
        <NebulaObject
          objectType="kpi"
          properties={{
            qHyperCubeDef: {
              qDimensions: [],

              qMeasures: [
                {
                  qDef: {
                    qDef: "Max(Features.MaxPlayers)",
                    qLabel: "Max players of all game",
                    qNumFormat: {
                      qType: "I",
                      qnDec: 0,
                    },
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
            },
          }}
        />
        <NebulaObject
          objectType="kpi"
          properties={{
            qHyperCubeDef: {
              qDimensions: [],
              qMeasures: [
                {
                  qDef: {
                    qDef: "Avg([Length.Main Story.Average])",
                    qLabel: "Average Completion Time",
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
            },
          }}
        />
      </Box>
      <Box>
        <NebulaObject
          objectType="piechart"
          properties={{
            qHyperCubeDef: {
              qDimensions: [
                {
                  qDef: {
                    qFieldDefs: ["Metadata.Genres"],
                  },
                },
              ],
              qMeasures: [
                {
                  qDef: {
                    qDef: "Count(Title)",
                    qLabel: "Total count of Title",
                    qNumFormat: {
                      qType: "I",
                      qnDec: 0,
                    },
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 5000 }],
            },
          }}
        />
        <NebulaObject
          objectType="barchart"
          size="normal"
          properties={{
            qHyperCubeDef: {
              qDimensions: [
                {
                  qDef: {
                    qFieldDefs: ["Release.Console"],
                  },
                },
              ],
              qMeasures: [
                {
                  qDef: {
                    qDef: "Sum(Metrics.Sales)",
                    qLabel: "Total Sales",
                  },
                },
              ],
              qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
            },
          }}
        />{" "}
      </Box>
    </Container>
  );
};

export default Index;
